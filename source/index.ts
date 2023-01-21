import testSimData from "./constants/testSimData.json";
import { ReactLineChart } from "./ReactLineChart";

const target = document.getElementById("root");

target &&
  ReactLineChart({
    // data
    data: testSimData.slice(0, 75),
    getX: (dp) => dp.x,
    getY: (dp) => dp.startingBalance,
    getZ: (dp) => dp.name,
    xAxisLabel: "x axis",
    yAxisLabel: " y axis",

    // dimensions
    width: 1000,
    height: 300,
  }).render(target);
