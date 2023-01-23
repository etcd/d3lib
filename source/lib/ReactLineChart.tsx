import { Axis, Orientation } from "@visx/axis";
import { LinePath } from "@visx/shape";
import { scaleLinear, scaleLog } from "@visx/scale";
import { Group } from "@visx/group";
import ReactDOM from "react-dom/client";
import { curveLinear } from "@visx/curve";
import { groupBy } from "../utilities/Arrays";
import { useEffect, useRef, useState } from "react";

import "./ReactLineChart.css";

export interface ChartProps<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  // styles
  height: number;
  axisWidth?: number;
  axisColor?: string;
  pointRadius?: number;
  pointColor?: string;
  lineWidth?: number;
  lineColor?: string;
}

export const Chart = <T,>(props: ChartProps<T>) => {
  // destructure props
  const {
    // data
    data,
    getX,
    getY,
    getZ,
    xAxisLabel,
    yAxisLabel,
    // styles
    height,
    axisWidth = 50,
    axisColor = "#000000",
    pointRadius = 1.3,
    pointColor = "#303030",
    lineWidth = 1,
    lineColor = "#303030",
  } = props;

  // dimensions
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  // closest datapoint
  const [closestDp, setClosestDp] = useState<T | undefined>(undefined);
  const closestDpGroup = closestDp ? getZ(closestDp) : undefined;

  // get dimensions
  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const boundingRect = current.getBoundingClientRect();

    setTop(boundingRect.top);
    setLeft(boundingRect.left);
    setWidth(current.clientWidth);
  }, []);

  // group data by z
  const dataGroups = groupBy(data, getZ);

  // scales
  const xScale = scaleLinear({
    domain: [0, Math.max(...data.map(getX))],
    range: [axisWidth, width],
  });
  const yScale = scaleLog({
    domain: [1, Math.max(...data.map(getY))],
    range: [height - axisWidth, 0],
  });

  // chart
  const chart = (
    <svg
      height={height}
      style={{ width: "100%" }}
      onPointerMove={(e) => {
        // get mouse coordinates relative to top left of chart
        const [localX, localY] = [e.clientX - left, e.clientY - top];

        // get closest datapoint
        const dpDistances = data.map((dp) =>
          Math.hypot(xScale(getX(dp))! - localX, yScale(getY(dp))! - localY)
        );
        const minDistance = Math.min(...dpDistances);
        const minDistanceIdx = dpDistances.indexOf(minDistance);

        setClosestDp(data[minDistanceIdx]);
      }}
      onPointerOut={() => {
        setClosestDp(undefined);
      }}
      ref={ref}
    >
      {/* data */}
      <Group>
        {/* points */}
        {Object.entries(dataGroups).map(
          ([dgName, dg]) => {
            if (closestDpGroup === undefined || closestDpGroup !== dgName)
              return;

            return dg.map((dp, i) => {
              return (
                <circle
                  key={i}
                  cx={xScale(getX(dp))}
                  cy={yScale(getY(dp))}
                  r={pointRadius}
                  fill={pointColor}
                />
              );
            });
          }
          // const pointX = xScale(getX(dp));
          // const pointY = yScale(getY(dp));
          //
          // return (
          //   <Bar
          //     key={i}
          //     x={pointX}
          //     y={pointY}
          //     height={yRangeMax - pointY}
          //     width={4}
          //     fill={datapointColor}
          //   />
          // );
        )}
      </Group>

      {/* lines */}
      <Group>
        {Object.entries(dataGroups).map(([dgName, dg], i) => {
          return (
            <LinePath<T>
              key={i}
              curve={curveLinear}
              data={dg}
              x={(dp) => xScale(getX(dp))}
              y={(dp) => yScale(getY(dp))}
              stroke={lineColor}
              strokeWidth={lineWidth}
              strokeOpacity={
                closestDpGroup === undefined || closestDpGroup === dgName
                  ? 1
                  : 0.3
              }
            />
          );
        })}
      </Group>

      {/* x axis */}
      <Axis
        orientation={Orientation.bottom}
        top={height - axisWidth}
        scale={xScale}
        stroke={axisColor}
        tickStroke={axisColor}
        label={xAxisLabel}
        labelProps={{
          y: 36,
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      />

      {/* y axis */}
      <Axis
        orientation={Orientation.left}
        left={axisWidth}
        scale={yScale}
        stroke={axisColor}
        tickStroke={axisColor}
        label={yAxisLabel}
        labelProps={{
          y: -22,
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      />

      {/* tooltip */}
      {(() => {
        if (!closestDp) return;

        const dpX = xScale(getX(closestDp));
        const dpY = yScale(getY(closestDp));

        const tooltipWidth = 120;
        const tooltipHeight = 60;
        const tooltipX = dpX - tooltipWidth / 2;
        const tooltipY = dpY - tooltipHeight - 10;

        return (
          <Group>
            {/* point corresponding to tooltip */}
            <circle cx={dpX} cy={dpY} r={3} fill={pointColor} />

            {/* tooltip box */}
            <rect
              x={tooltipX}
              y={tooltipY}
              width={tooltipWidth}
              height={tooltipHeight}
              fill="#ffffff"
              fillOpacity={0.85}
              stroke="#000000"
              strokeOpacity={0.9}
            />
            {/* tooltip title */}
            <text
              x={tooltipX + 10}
              y={tooltipY + 20}
              fontSize={12}
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              {closestDpGroup}
            </text>
            {/* tooltip body text */}
            <text
              x={tooltipX + 10}
              y={tooltipY + 35}
              fontSize={12}
              fontFamily="sans-serif"
            >
              {getX(closestDp)}
            </text>
            <text
              x={tooltipX + 10}
              y={tooltipY + 50}
              fontSize={12}
              fontFamily="sans-serif"
            >
              {Number(getY(closestDp)).toFixed(2)}
            </text>
          </Group>
        );
      })()}
    </svg>
  );

  return chart;
};

export const render =
  <T,>(props: ChartProps<T>) =>
  (target: HTMLElement) => {
    ReactDOM.createRoot(target).render(<Chart {...props} />);
  };
