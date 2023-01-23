import React from "react";
import * as ReactDOM from "react-dom/client";

import testSimData from "./source/constants/testSimData.json";
import { Chart as ReactLineChart } from "./source/lib/ReactLineChart";

import "./global.css";

const rootElement = document.getElementById("root");

rootElement &&
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div className="m-5">
        <ReactLineChart
          // data
          data={testSimData}
          getX={(dp) => dp.x}
          getY={(dp) => dp.startingBalance}
          getZ={(dp) => dp.name}
          chartType="log"
          xAxisLabel="x axis"
          yAxisLabel="y axis"
          // dimensions
          height={300}
        />
      </div>
    </React.StrictMode>
  );
