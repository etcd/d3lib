import React from "react";
import * as ReactDOM from "react-dom";

const MyChart = () => {
  return <div>hello world</div>;
};

export const renderMyChart = () => {
  ReactDOM.render(
    <React.StrictMode>
      <MyChart />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
