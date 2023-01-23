import { Axis, Orientation } from "@visx/axis";
import { LinePath } from "@visx/shape";
import { scaleLinear, scaleLog } from "@visx/scale";
import { Group } from "@visx/group";
import ReactDOM from "react-dom/client";
import { curveLinear } from "@visx/curve";
import { groupBy } from "../utilities/Arrays";
import { useEffect, useRef, useState } from "react";

import "./ReactLineChart.css";

interface Margins {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface ChartProps<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ?: (p: T) => string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  // styles
  height: number;
  margins?: Margins;
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
    margins = { left: 10, top: 50, right: 50, bottom: 10 },
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
  const closestDpGroup = closestDp && getZ ? getZ(closestDp) : undefined;

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
  const dataGroups = getZ ? groupBy(data, getZ) : undefined;

  // scales
  const xScale = scaleLinear({
    domain: [0, Math.max(...data.map(getX))],
    range: [(margins.left ?? 0) + axisWidth, width - (margins.right ?? 0)],
  });
  const yScale = scaleLog({
    domain: [1, Math.max(...data.map(getY))],
    range: [height - axisWidth - (margins.bottom ?? 0), margins.top ?? 0],
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
        {dataGroups
          ? Object.entries(dataGroups).map(([dgName, dg]) => {
              if (closestDpGroup === undefined || closestDpGroup !== dgName)
                return;

              // make points for this datagroup
              return dg.map((dp, i) => {
                return (
                  <circle
                    key={i}
                    cx={xScale(getX(dp))}
                    cy={yScale(getY(dp))}
                    r={pointRadius}
                    fill={pointColor}
                    opacity={0.4}
                  />
                );
              });
            })
          : data.map((dp, i) => (
              <circle
                key={i}
                cx={xScale(getX(dp))}
                cy={yScale(getY(dp))}
                r={pointRadius}
                fill={pointColor}
              />
            ))}
      </Group>

      {/* endpoint labels */}
      {dataGroups && getZ && (
        <Group>
          {Object.values(dataGroups).map((dg) => {
            const lastDp = dg[dg.length - 1];
            if (lastDp === undefined) return;

            const pointX = xScale(getX(lastDp));
            const pointY = yScale(getY(lastDp));

            const groupName = getZ(lastDp);
            const opacity =
              closestDpGroup === undefined || closestDpGroup === groupName
                ? 1
                : 0.4;

            return (
              <>
                {/* point */}
                <circle
                  cx={pointX}
                  cy={pointY}
                  r={1.5}
                  fill={pointColor}
                  opacity={opacity}
                />
                {/* group */}
                <text
                  x={pointX + 3}
                  y={pointY + 3}
                  fontSize={11}
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  opacity={opacity}
                >
                  {groupName}
                </text>
              </>
            );
          })}
        </Group>
      )}

      {/* lines */}
      <Group>
        {dataGroups ? (
          Object.entries(dataGroups).map(([dgName, dg], i) => {
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
                    : 0.15
                }
              />
            );
          })
        ) : (
          <LinePath<T>
            curve={curveLinear}
            data={data}
            x={(dp) => xScale(getX(dp))}
            y={(dp) => yScale(getY(dp))}
            stroke={lineColor}
            strokeWidth={lineWidth}
          />
        )}
      </Group>

      {/* x axis */}
      <Axis
        orientation={Orientation.bottom}
        top={height - axisWidth - (margins.bottom ?? 0)}
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
        left={axisWidth + (margins.left ?? 0)}
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

        const tooltipTitle = closestDpGroup;
        const tooltipWidth = 120;
        const tooltipHeight = tooltipTitle ? 60 : 40;
        const tooltipX = dpX - tooltipWidth / 2;
        const tooltipY = dpY - tooltipHeight - 10;

        return (
          <Group>
            {/* point corresponding to tooltip */}
            <circle cx={dpX} cy={dpY} r={2} fill={pointColor} />

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
              {tooltipTitle}
            </text>
            {/* tooltip body text */}
            <text
              x={tooltipX + 10}
              y={tooltipY + (tooltipTitle ? 35 : 15)}
              fontSize={12}
              fontFamily="sans-serif"
            >
              {getX(closestDp)}
            </text>
            <text
              x={tooltipX + 10}
              y={tooltipY + (tooltipTitle ? 50 : 30)}
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
