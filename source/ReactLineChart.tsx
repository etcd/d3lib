import React from "react";
import * as ReactDOM from "react-dom/client";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";

interface Margins {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Chart = <T,>({
  data,
  getX,
  getY,
  getZ,
  width,
  height,
  margins,
}: {
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => number | string;
  width: number;
  height: number;
  margins: Margins;
}) => {
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
    range: [0, yRangeMax],
    round: true,
    domain: [0, Math.max(...data.map(getY))],
  });

  // compose the scale and accessor functions to get point functions
  const xPoint = (dp: T) => xScale(getX(dp));
  const yPoint = (dp: T) => yScale(getY(dp));

  return (
    <svg width={width} height={height}>
      {data.map((dp, i) => {
        const barHeight = yPoint(dp);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(dp)}
              y={barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </svg>
  );
};

export const render =
  <T,>({
    data,
    getX,
    getY,
    getZ,
    width,
    height,
    margins,
  }: {
    data: T[];
    getX: (p: T) => number;
    getY: (p: T) => number;
    getZ: (p: T) => number | string;
    width: number;
    height: number;
    margins: Margins;
  }) =>
  (target: HTMLElement) => {
    const root = ReactDOM.createRoot(target);

    root.render(
      <React.StrictMode>
        <Chart
          data={data}
          getX={getX}
          getY={getY}
          getZ={getZ}
          width={width}
          height={height}
          margins={margins}
        />
      </React.StrictMode>
    );
  };
