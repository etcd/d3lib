import React from "react";
// import * as ReactDOM from "react-dom/client";
import * as ReactDOM from "react-dom";
import { ChartProps } from "./ReactLineChart";

export const renderChartTo =
  <T,>(
    Component: (props: ChartProps<T>) => JSX.Element,
    props: ChartProps<T>
  ) =>
  (target: HTMLElement) => {
    const targetDom = ReactDOM.render(<Component {...props} />, target);
  };
