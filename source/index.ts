import testSimData from "./constants/testSimData.json";
import { render } from "./ReactLineChart";

const target = document.getElementById("root");

target &&
  render({
    data: testSimData.slice(0, 10),
    getX: (dp) => dp.x,
    getY: (dp) => dp.startingBalance,
    getZ: (dp) => dp.name,
    width: 100,
    height: 300,
    margins: { left: 0, top: 0, right: 0, bottom: 0 },
  })(target);
