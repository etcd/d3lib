import * as d3 from "d3";

import * as Arrays from "./utilities/Arrays";

const extentIsDefined = (
  extent: readonly [number, number] | readonly [undefined, undefined]
): extent is readonly [number, number] =>
  extent[0] === undefined ? false : true;

export const make = <T>(
  data: T[],
  {
    x,
    y,
    z,
    marginTop = 20,
    marginRight = 30,
    marginBottom = 30,
    marginLeft = 40,
    width = 640,
    height = 400,
    xType = d3.scaleUtc,
    xDomain,
    xRange = [marginLeft, width - marginRight],
    yType = d3.scaleLog,
    yDomain,
    yRange = [height - marginBottom, marginTop],
    lineColor = "#606060",
    strokeLinecap = "round",
    strokeLinejoin = "round",
    strokeWidth = 1,
    strokeOpacity = 1,
    xFormat = ",.1f",
    yFormat = ",.1f",
    xLabel,
    yLabel,

    xAxisOffset = 1,

    drawLine = true,
    drawPoints = true,
    pointRadius = 1.5,
    pointFillColor = "#202020",
    pointFillOpacity = 0,
    pointStrokeColor = "#202020",
    pointStrokeOpacity = 0.5,

    color = "currentColor",
    mixBlendMode = "multiply",
  }: {
    /** given datapoint, returns the (temporal) x-value */
    readonly x: (p: T) => number;
    /** given datapoint, returns the (quantitative) y-value */
    readonly y: (p: T) => number;
    /** given datapoint, returns the (categorical) z-value */
    readonly z: (p: T) => number;
    /** top margin (px) */
    readonly marginTop: number;
    /** right margin (px) */
    readonly marginRight: number;
    /** bottom margin (px) */
    readonly marginBottom: number;
    /** left margin (px) */
    readonly marginLeft: number;
    /** outer width of chart (px) */
    readonly width: number;
    /** outer height of chart (px) */
    readonly height: number;
    /**
     * Function to return the x-scale type. Valid scales
     * are ones with the `tickFormat` property.
     */
    readonly xType: (
      domain: Iterable<d3.NumberValue>,
      range: Iterable<number>
    ) => d3.AxisScale<Date | d3.NumberValue>;
    /** x domain min and max */
    readonly xDomain?: readonly [number, number];
    /** x range min and max */
    readonly xRange: readonly [number, number];
    /**
     * Function to return the y-scale type. Valid scales
     * are ones with the `tickFormat` property.
     */
    readonly yType: (
      domain: Iterable<d3.NumberValue>,
      range: Iterable<number>
    ) => d3.AxisScale<Date | d3.NumberValue>;
    /** y domain min and max */
    readonly yDomain?: readonly [number, number];
    /** y range min and max */
    readonly yRange: readonly [number, number];
    /** stroke color of line */
    readonly lineColor: string;
    /** stroke line cap of the line */
    readonly strokeLinecap: string;
    /** stroke line join of the line */
    readonly strokeLinejoin: string;
    /** stroke width of line (px) */
    readonly strokeWidth: number;
    /** stroke opacity of line */
    readonly strokeOpacity: number;
    /** a format specifier string for the x-axis */
    readonly xFormat: string;
    /** a format specifier string for the y-axis */
    readonly yFormat: string;
    /** x-axis label */
    readonly xLabel: string;
    /** y-axis label */
    readonly yLabel: string;
    /** the y value at which to render the x axis (useful for log scales that don't have y=0) */
    readonly xAxisOffset: number;

    /** whether to draw the lines connecting data points */
    readonly drawLine: boolean;
    /** whether to draw the data points */
    readonly drawPoints: boolean;
    /** point radius */
    readonly pointRadius: number;
    readonly pointFillColor: string;
    readonly pointFillOpacity: number;
    readonly pointStrokeColor: string;
    readonly pointStrokeOpacity: number;
    /** stroke color of line, as a constant or a function of z */
    readonly color: string;
    /** blend mode of lines */
    readonly mixBlendMode: string;
  }
) => {
  // Compute default domains
  const defaultXDomain = (() => {
    const xExtent = Arrays.extent(data.map(x));
    return extentIsDefined(xExtent) ? xExtent : [-10, 10];
  })();
  const defaultYDomain = (() => {
    const yExtent = Arrays.extent(data.map(y));
    return extentIsDefined(yExtent) ? yExtent : [-10, 10];
  })();

  // scales
  const xScale = xType(xDomain ?? defaultXDomain, xRange);
  const yScale = yType(yDomain ?? defaultYDomain, yRange);

  // axes
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(width / 80)
    .tickSizeOuter(0)
    .tickFormat((d) => d3.format(xFormat)(d));
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(height / 80)
    .tickFormat((d) => d3.format(yFormat)(d));

  // titles (for tooltip)
  const formatXValue = d3.format(xFormat);
  const formatYValue = d3.format(yFormat);
  const makeTitle = (dp: T) => [
    z(dp),
    `${formatXValue(x(dp))}, ${formatYValue(y(dp))}`,
  ];

  const svg = d3
    // dimensions
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    // event handlers
    .on("pointerenter", pointerentered)
    .on("pointermove", pointermoved)
    .on("pointerleave", pointerleft)
    .on("touchstart", (event) => event.preventDefault());

  // x axis
  svg
    .append("g")
    .attr("transform", `translate(0,${yScale(xAxisOffset)})`)
    .call(xAxis)
    .call((g) =>
      g
        .append("text")
        .attr("x", width / 2)
        .attr("y", marginBottom)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(xLabel)
    );

  // y axis
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .selectAll(".tick line")
        .clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
    )
    .call((g) =>
      g
        .append("text")
        .attr("transform", "rotate(270)")
        .attr("x", -height / 2)
        .attr("y", -marginLeft + 20)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(yLabel)
    );

  // group data by z
  const dataGroupsByZ = d3.group(data, (dp) => z(dp));

  // line
  const lines = (() => {
    if (drawLine) {
      const makeLine = d3
        .line()
        // ensure each point is valid
        .defined(([xVal, yVal]) => !isNaN(xVal) && !isNaN(yVal))
        // for each point on the line, scale its coordinates
        .x(([xVal]) => xScale(xVal)!)
        .y(([_xVal, yVal]) => yScale(yVal)!)
        // interpolation method
        .curve(d3.curveLinear);

      return svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke", typeof color === "string" ? color : null)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-opacity", strokeOpacity)
        .selectAll("path")
        .data(dataGroupsByZ)
        .join("path")
        .style("mix-blend-mode", mixBlendMode)
        .attr("d", ([_z, dataGroup]) =>
          makeLine(dataGroup.map((dp) => [x(dp), y(dp)]))
        );
    }
  })();

  // points
  const points = (() => {
    if (drawPoints) {
      return Array.from(dataGroupsByZ.values()).map((dps) => {
        return (
          svg
            .append("g")
            .selectAll("circle")
            .data(dps)
            // .data(d3.group(I, (i) => Z[i]))
            .enter()
            .append("circle")
            .attr("fill", pointFillColor)
            .attr("fill-opacity", pointFillOpacity)
            .attr("cx", (dp) => xScale(x(dp))!)
            .attr("cy", (dp) => yScale(y(dp))!)
            .attr("stroke", pointStrokeColor)
            .attr("stroke-opacity", pointStrokeOpacity)
            .attr("r", pointRadius)
          // .raise()
        );
      });

      // .each((x, i) => {
      //   return x
      //     .enter()
      //     .append("circle")
      //     .attr("fill", pointFillColor)
      //     .attr("fill-opacity", pointFillOpacity)
      //     .attr("cx", (d, i) => xScale(X[i]))
      //     .attr("cy", (d, i) => yScale(Y[i]))
      //     .attr("stroke", pointStrokeColor)
      //     .attr("stroke-opacity", pointStrokeOpacity)
      //     .attr("r", pointRadius)
      //     .raise();
      // });
    }
  })();

  // tooltip
  const tooltipGroup = svg.append("g").attr("display", "none");
  // tooltip dot
  tooltipGroup.append("circle").attr("r", 2.5);
  // tooltip bg
  const ttBgWidth = 120;
  const ttBgHeight = 45;
  tooltipGroup
    .append("rect")
    .attr("width", ttBgWidth)
    .attr("height", ttBgHeight)
    .attr("x", -ttBgWidth / 2)
    .attr("y", -ttBgHeight - 17)
    .attr(
      "style",
      "fill:#fff; fill-opacity:0.6; stroke:#000; stroke-opacity:0.5;"
    );
  // tooltip text
  tooltipGroup
    .append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("y", -8);

  function pointermoved(event: PointerEvent) {
    // get the position of the pointer
    const [pointerX, pointerY] = d3.pointer(event);

    // closest datapoint to pointer position
    const closestDp = d3.least(data, (dp) => {
      return Math.hypot(xScale(x(dp))! - pointerX, yScale(y(dp))! - pointerY);
    });

    // translate the tooltip
    tooltipGroup.attr(
      "transform",
      `translate(${xScale(x(closestDp!))},${yScale(y(closestDp!))})`
    );

    // add tooltip text
    tooltipGroup.select("text").call((text) =>
      text
        .selectAll("tspan")
        .data(makeTitle(closestDp!))
        .join("tspan")
        .attr("x", 0)
        .attr("y", (_text, i) => `${(i - 3) * 1.2}em`)
        .attr("font-weight", (_text, i) => i === 0 && "bold")
        .text((text) => text)
    );

    // emphasize hovered Z
    // path
    lines &&
      lines
        .style("stroke", ([zHovered]) =>
          z(closestDp!) === zHovered ? null : "#ddd"
        )
        .filter(([zHovered]) => z(closestDp!) === zHovered)
        .raise();
    // points
    points &&
      points.map((pointGroup) => {
        const foo = pointGroup
          .selectAll("circle")
          .join("circle")
          .attr("r", 0)
          // .enter()
          .attr("r", 0);
        // .attr("r", (x) => {
        //   console.log(x);
        // })
        // .raise();

        // console.log(foo);
      });
    // groupedData.map((d) => {
    // svg
    //   .append("g")
    //   .selectAll("circle")
    //   .data(d)
    //   .filter((d) => {
    //     console.log(d);
    //     return d.z === Z[pt];
    //   })
    //   .enter()
    //   .node().value = null;

    // .attr("fill", pointFillColor)
    // .attr("fill-opacity", pointFillOpacity)
    // .attr("cx", (d, i) => xScale(X[i]))
    // .attr("cy", (d, i) => yScale(Y[i]))
    // .attr("stroke", pointStrokeColor)
    // .attr("stroke-opacity", pointStrokeOpacity)
    // .attr("r", pointRadius)
    // .raise();
    // });

    // svg
    //   .selectAll("circle")
    //   .join()
    //   .style("stroke", (z) => {
    //     console.log(z);
    //     return Z[pt] === z ? null : "#ddd";
    //   });

    // .style("stroke", ([z]) => (Z[i] === z ? null : "#ddd"))
    // .filter(([z]) => Z[i] === z)

    // svg.property("value", O[i]).dispatch("input", { bubbles: true });
  }

  function pointerentered() {
    lines && lines.style("mix-blend-mode", null).style("stroke", "#ddd");
    tooltipGroup.attr("display", null);
  }

  function pointerleft() {
    tooltipGroup.attr("display", "none");
    lines && lines.style("mix-blend-mode", mixBlendMode).style("stroke", null);
    // svg.node().value = null;
    // svg.dispatch("input", { bubbles: true });
  }

  return svg.node();
};
