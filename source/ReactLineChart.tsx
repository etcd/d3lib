import React from "react";
import * as ReactDOM from "react-dom/client";
// import { Group } from "@visx/group";
import { Axis, Orientation } from "@visx/axis";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

interface Margins {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface Props<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => number | string;
  xAxisLabel?: string;
  yAxisLabel?: string;

  // dimensions
  width: number;
  height: number;
  margins?: Margins;
  axisWidth?: number;

  // colors
  axisColor?: string;
  datapointColor?: string;
}

export const ReactLineChart = <T,>(
  props: Props<T>
): JSX.Element & { render: (target: HTMLElement) => void } => {
  const {
    // data
    data,
    getX,
    getY,
    getZ,
    xAxisLabel,
    yAxisLabel,

    // dimensions
    width,
    height,
    margins,
    axisWidth = 80,

    // colors
    axisColor = "#000000",
    datapointColor = "#888888",
  } = props;

  // bounds
  const xRangeMax =
    width - (margins?.left ?? 0) - (margins?.right ?? 0) - axisWidth;
  const yRangeMax =
    height - (margins?.top ?? 0) - (margins?.bottom ?? 0) - axisWidth;

  // scales
  const xScale = scaleBand({
    range: [axisWidth, xRangeMax + axisWidth],
    round: true,
    domain: data.map(getX),
    padding: 0.3,
  });
  const yScale = scaleLinear({
    range: [yRangeMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(getY))],
  });

  // chart
  const chart = (
    <svg width={width} height={height}>
      {/* bars */}
      {data.map((dp) => {
        // points
        const xPoint = xScale(getX(dp));
        const yPoint = yScale(getY(dp));

        return (
          <Bar
            x={xPoint}
            y={yPoint}
            height={yRangeMax - yPoint}
            width={xScale.bandwidth()}
            fill={datapointColor}
          />
        );
      })}

      {/* x axis */}
      <Axis
        orientation={Orientation.bottom}
        top={yRangeMax}
        scale={xScale}
        // tickFormat={tickFormat}
        stroke={axisColor}
        tickStroke={axisColor}
        // tickLabelProps={tickLabelProps}
        tickValues={data.map(getX)} // undefined if log or time
        label={xAxisLabel}
        labelProps={{
          y: 36,
          fontSize: 12,
          fontFamily: "sans-serif",
        }}
      />

      {/* y axis */}
      <Axis
        orientation={Orientation.left}
        left={axisWidth}
        scale={yScale}
        // tickFormat={tickFormat}
        stroke={axisColor}
        tickStroke={axisColor}
        // tickLabelProps={tickLabelProps}
        tickValues={data.map(getY)} // undefined if log or time
        label={yAxisLabel}
        labelProps={{
          y: -24,
          fontSize: 12,
          fontFamily: "sans-serif",
          textAnchor: "start",
        }}
      />
    </svg>
  );

  return {
    ...chart,
    render: (target: HTMLElement) => {
      const root = ReactDOM.createRoot(target);
      root.render(
        <React.StrictMode>
          <ReactLineChart {...props} />
        </React.StrictMode>
      );
    },
  };
};
