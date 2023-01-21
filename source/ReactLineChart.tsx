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
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => number | string;
  width: number;
  height: number;
  margins: Margins;
  axisColor: string;
}

export const ReactLineChart = <T,>({
  data,
  getX,
  getY,
  getZ,
  width,
  height,
  margins,
  axisColor,
}: Props<T>): JSX.Element & { render: (target: HTMLElement) => void } => {
  // bounds
  const xRangeMax = width - (margins?.left ?? 0) - (margins?.right ?? 0);
  const yRangeMax = height - (margins?.top ?? 0) - (margins?.bottom ?? 0);

  // scale the graph by our data
  const xScale = scaleBand({
    range: [0, xRangeMax],
    round: true,
    domain: data.map(getX),
    padding: 0.3,
  });
  const yScale = scaleLinear({
    range: [yRangeMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(getY))],
  });

  // compose the scale and accessor functions to get point functions
  const xPoint = (dp: T) => xScale(getX(dp));
  const yPoint = (dp: T) => yScale(getY(dp));

  const chart = (
    <svg width={width} height={height}>
      {data.map((dp, i) => {
        return (
          <Bar
            x={xPoint(dp)}
            y={yPoint(dp)}
            height={yRangeMax - yPoint(dp)}
            width={xScale.bandwidth()}
            fill="#fc2e1c"
          />
        );
      })}
      {/* x axis */}
      <Axis
        orientation={Orientation.top}
        top={yRangeMax}
        scale={xScale}
        // tickFormat={tickFormat}
        stroke={axisColor}
        tickStroke={axisColor}
        // tickLabelProps={tickLabelProps}
        tickValues={data.map(getX)} // undefined if log or time
        // label={"x axis label"}
        labelProps={{
          x: width + 30,
          // y: -100,
          fill: "#000",
          fontSize: 18,
          strokeWidth: 0,
          stroke: "#fff",
          paintOrder: "stroke",
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
          <ReactLineChart
            data={data}
            getX={getX}
            getY={getY}
            getZ={getZ}
            width={width}
            height={height}
            margins={margins}
            axisColor={axisColor}
          />
        </React.StrictMode>
      );
    },
  };
};
