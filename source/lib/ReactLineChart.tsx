// import { Group } from "@visx/group";
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
  // hooks
  const [width, setWidth] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const boundingRect = current.getBoundingClientRect();

    setTop(boundingRect.top);
    setLeft(boundingRect.left);
    setWidth(current.clientWidth);
  }, []);

  // props
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
    pointRadius = 1.5,
    pointColor = "#303030",
    lineWidth = 1,
    lineColor = "#303030",
  } = props;

  // group data by z
  const dataGroups = groupBy(data, getZ);

  // scales
  const xScale = scaleLinear({
    domain: [0, Math.max(...data.map(getX))],
    range: [axisWidth, width],
  });
  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(getY))],
    range: [height - axisWidth, 0],
  });

  // chart
  const chart = (
    <svg
      height={height}
      style={{ width: "100%" }}
      onPointerMove={(e) => {
        const localX = e.clientX - left;
        const localY = e.clientY - top;

        console.log("local", localX, localY);
      }}
      ref={ref}
    >
      {/* data */}
      <Group>
        {/* points */}
        {Object.values(dataGroups).map(
          (dg) =>
            dg.map((dp, i) => {
              return (
                <circle
                  key={i}
                  cx={xScale(getX(dp))}
                  cy={yScale(getY(dp))}
                  r={pointRadius}
                  fill={pointColor}
                />
              );
            })
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

        {/* lines */}
        {Object.values(dataGroups).map((dg, i) => (
          <LinePath<T>
            key={i}
            curve={curveLinear}
            data={dg}
            x={(dp) => xScale(getX(dp))}
            y={(dp) => yScale(getY(dp))}
            stroke={lineColor}
            strokeWidth={lineWidth}
          />
        ))}
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
    </svg>
  );

  return chart;
};

export const render =
  <T,>(props: ChartProps<T>) =>
  (target: HTMLElement) => {
    ReactDOM.createRoot(target).render(<Chart {...props} />);
  };
