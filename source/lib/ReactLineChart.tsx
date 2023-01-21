// import { Group } from "@visx/group";
import { Axis, Orientation } from "@visx/axis";
import { Bar, LinePath } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { useMeasure } from "react-use";
import { Group } from "@visx/group";
import { curveLinear } from "d3";
import ReactDOM from "react-dom/client";

import "./ReactLineChart.css";

export interface ChartProps<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => number | string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  xTickSpacing?: number;
  yTickSpacing?: number;
  // styles
  height: number;
  axisWidth?: number;
  axisColor?: string;
  pointRadius?: number;
  pointColor?: string;
  lineWidth?: number;
  lineColor?: string;
}

export const ReactLineChart = <T,>(props: ChartProps<T>) => {
  // get props
  const {
    // data
    data,
    getX,
    getY,
    getZ,
    xAxisLabel,
    yAxisLabel,
    xTickSpacing = 50,
    yTickSpacing = 50,
    // styles
    height,
    axisWidth = 50,
    axisColor = "#000000",
    pointRadius = 1.5,
    pointColor = "#303030",
    lineWidth = 1,
    lineColor = "#303030",
  } = props;

  // hooks
  const [ref, { width }] = useMeasure<SVGSVGElement>();

  // bounds
  const xRangeMax = width - axisWidth;
  const yRangeMax = height - axisWidth;

  // maxs
  const xMax = Math.max(...data.map(getX));
  const yMax = Math.max(...data.map(getY));

  // scales
  const xScale = scaleLinear({
    domain: [0, xMax],
    range: [axisWidth, xRangeMax + axisWidth],
    round: true,
  });
  const yScale = scaleLinear({
    domain: [0, yMax],
    range: [yRangeMax, 0],
    round: true,
  });

  // ticks (undefined if log or time)
  const xNumTicks = width / xTickSpacing;
  const yNumTicks = height / yTickSpacing;
  const xTickValues = Array.from(
    { length: xNumTicks },
    (_, i) => (i / xNumTicks) * xMax
  );
  const yTickValues = Array.from(
    { length: yNumTicks },
    (_, i) => (i / yNumTicks) * yMax
  );

  // chart
  const chart = (
    <svg height={height} className="w-full" ref={ref}>
      {/* data */}
      <Group>
        {/* points */}
        {data.map((dp, i) => {
          const pointX = xScale(getX(dp));
          const pointY = yScale(getY(dp));

          return (
            <circle
              key={i}
              cx={pointX}
              cy={pointY}
              r={pointRadius}
              fill={pointColor}
            />
          );
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
        })}
        <LinePath<T>
          curve={curveLinear}
          data={data}
          x={(dp) => xScale(getX(dp))}
          y={(dp) => yScale(getY(dp))}
          stroke={lineColor}
          strokeWidth={lineWidth}
        />
      </Group>

      {/* x axis */}
      <Axis
        orientation={Orientation.bottom}
        top={yRangeMax}
        scale={xScale}
        stroke={axisColor}
        tickStroke={axisColor}
        tickValues={xTickValues}
        // tickFormat={tickFormat}
        // tickLabelProps={tickLabelProps}
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
        tickValues={yTickValues}
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
    const root = ReactDOM.createRoot(target);

    root.render(<ReactLineChart {...props} />);
  };
