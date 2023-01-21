import React from "react";
import * as ReactDOM from "react-dom";

const MyChart = () => {
  return <div>hello world</div>;
};

export const renderMyChart = (target: HTMLElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <MyChart />
    </React.StrictMode>,
    target
  );
};
