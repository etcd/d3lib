import React from "react";
import * as ReactDOM from "react-dom";

const Chart = () => {
  return <div>hello world</div>;
};

export const render = (target: HTMLElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <Chart />
    </React.StrictMode>,
    target
  );
};
