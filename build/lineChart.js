"use strict";
exports.__esModule = true;
exports.svg = void 0;
var d3 = require("d3");
// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 }, width = 460 - margin.left - margin.right, height = 400 - margin.top - margin.bottom;
// append the svg object to the body of the page
exports.svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//# sourceMappingURL=lineChart.js.map