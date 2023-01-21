import React from "react";
import * as ReactDOM from "react-dom/client";

import testSimData from "./source/constants/testSimData.json";
import { ReactLineChart } from "./source/lib/ReactLineChart";
import { renderChartTo } from "./source/lib/utils";

import "./global.css";

const rootElement = document.getElementById("root");

// rootElement &&
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <div className="m-5">
//         <ReactLineChart
//           // data
//           data={testSimData.slice(0, 200)}
//           getX={(dp) => dp.x}
//           getY={(dp) => dp.startingBalance}
//           getZ={(dp) => dp.name}
//           xAxisLabel={"x axis"}
//           yAxisLabel={"y axis"}
//           // dimensions
//           height={300}
//         />
//       </div>
//     </React.StrictMode>
//   );

// // if using with Observable, use something like this:

rootElement &&
  renderChartTo(ReactLineChart, {
    // data
    data: testSimData.slice(0, 200),
    getX: (dp) => dp.x,
    getY: (dp) => dp.startingBalance,
    getZ: (dp) => dp.name,
    xAxisLabel: "x axis",
    yAxisLabel: "y axis",
    // dimensions
    height: 300,
  })(rootElement);
