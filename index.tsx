import React from "react";

import testSimData from "./source/constants/testSimData.json";
import { ReactLineChart } from "./source/lib/ReactLineChart";
import { renderElementTo } from "./source/lib/utils";

const target = document.getElementById("root");

target &&
  renderElementTo(
    <React.StrictMode>
      <ReactLineChart
        // data
        data={testSimData.slice(0, 75)}
        getX={(dp) => dp.x}
        getY={(dp) => dp.startingBalance}
        getZ={(dp) => dp.name}
        xAxisLabel={"x axis"}
        yAxisLabel={" y axis"}
        // dimensions
        width={1000}
        height={300}
      />
    </React.StrictMode>
  )(target);
