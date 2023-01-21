import React from "react";
import * as ReactDOM from "react-dom";

const Chart = ({ width, height }: { width: number; height: number }) => {
  return (
    <svg width={width} height={height}>
      this is an SVG
    </svg>
  );
};

export const render =
  ({ width, height }: { width: number; height: number }) =>
  (target: HTMLElement) => {
    ReactDOM.render(
      <React.StrictMode>
        <Chart width={width} height={height} />
      </React.StrictMode>,
      target
    );
  };
