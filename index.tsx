import React from "react";
import * as ReactDOM from "react-dom/client";

import testSimData from "./source/constants/testSimData.json";
import { Chart as ReactLineChart } from "./source/lib/ReactLineChart";

import "./global.css";

const rootElement = document.getElementById("root");

/** Given odds, calculate probability of a win if you bet `yes` */
const oddsToImpliedP = (odds: number) => 1 / odds;

const N_POINTS = 2000;

rootElement &&
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div>
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
            // display
            height={300}
          />
        </div>
        <div className="m-5">
          <ReactLineChart
            // data
            data={testSimData}
            getX={(dp) => dp.realProbability - oddsToImpliedP(dp.odds)}
            getY={(dp) => dp.amountWon / dp.startingBalance}
            getZ={(dp) => dp.name}
            xAxisLabel="Edge (real p – implied p)"
            yAxisLabel="Scaled amount won"
            // display
            height={500}
            pointOpacity={500 / N_POINTS}
            showLines={false}
            showPoints={true}
            yDomain={[-0.2, 0.2]}
            xAxisLocation={0}
          />
        </div>
      </div>
    </React.StrictMode>
  );
