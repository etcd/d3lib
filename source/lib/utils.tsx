import React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartProps } from "./ReactLineChart";

export const renderChartTo =
  <T,>(
    Component: (props: ChartProps<T>) => JSX.Element,
    props: ChartProps<T>
  ) =>
  (target: HTMLElement) => {
    const targetDom = ReactDOM.createRoot(target);
    targetDom.render(<Component {...props} />);
  };
