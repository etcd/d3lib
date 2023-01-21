import testSimData from "./constants/testSimData.json";
import { ReactLineChart } from "./ReactLineChart";

const target = document.getElementById("root");

target &&
  ReactLineChart({
    data: testSimData.slice(0, 75),
    getX: (dp) => dp.x,
    getY: (dp) => dp.startingBalance,
    getZ: (dp) => dp.name,
    width: 1000,
    height: 300,
    margins: { left: 0, top: 0, right: 0, bottom: 0 },
    axisColor: "#000000",
  }).render(target);
