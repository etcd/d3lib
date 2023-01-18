import * as d3 from "d3";

const extentIsDefined = (
  extent: [number, number] | [undefined, undefined]
): extent is [number, number] =>
  extent !== ([undefined, undefined] as const) ? false : true;

export const makeBasicChart = <T>(
  data: T[],
  {
    x,
    y,
    z,
    basis = 1,
    curve = d3.curveLinear,
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
    x: (p: T) => number;
    /** given datapoint, returns the (quantitative) y-value */
    y: (p: T) => number;
    /** given datapoint, returns the (categorical) z-value */
    z: (p: T) => number;
    /** the basis value; defaults to the first y-value */
    basis?: number;
    /** interpolation method between points */
    curve: d3.CurveFactory;
    /** top margin (px) */
    marginTop: number;
    /** right margin (px) */
    marginRight: number;
    /** bottom margin (px) */
    marginBottom: number;
    /** left margin (px) */
    marginLeft: number;
    /** outer width of chart (px) */
    width: number;
    /** outer height of chart (px) */
    height: number;
    /** the x-scale type */
    xType: (
      domain: Iterable<d3.NumberValue>,
      range: Iterable<number>
    ) => d3.AxisScale<Date | d3.NumberValue>;
    /** x domain min and max */
    xDomain?: [number, number];
    /** x range min and max */
    xRange: [number, number];
    /** the y-scale type */
    yType: (
      domain: Iterable<d3.NumberValue>,
      range: Iterable<number>
    ) => d3.AxisScale<Date | d3.NumberValue>;
    /** y domain min and max */
    yDomain?: [number, number];
    /** y range min and max */
    yRange: [number, number];
    /** stroke color of line */
    lineColor: string;
    /** stroke line cap of the line */
    strokeLinecap: string;
    /** stroke line join of the line */
    strokeLinejoin: string;
    /** stroke width of line (px) */
    strokeWidth: number;
    /** stroke opacity of line */
    strokeOpacity: number;
    /** a format specifier string for the x-axis */
    xFormat: string;
    /** a format specifier string for the y-axis */
    yFormat: string;
    /** x-axis label */
    xLabel: string;
    /** y-axis label */
    yLabel: string;
    /** the y value at which to render the x axis (useful for log scales that don't have y=0) */
    xAxisOffset: number;

    /** whether to draw the lines connecting data points */
    drawLine: boolean;
    /** whether to draw the data points */
    drawPoints: boolean;
    /** point radius */
    pointRadius: number;
    pointFillColor: string;
    pointFillOpacity: number;
    pointStrokeColor: string;
    pointStrokeOpacity: number;
    /** stroke color of line, as a constant or a function of z */
    color: string;
    /** blend mode of lines */
    mixBlendMode: string;
  }
) => {
  // values
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const Z = d3.map(data, z);
  const I = d3.range(X.length);

  // prune invalid datapoints
  const D = d3.map(data, (d, i) => !isNaN(x(d)) && !isNaN(y(d)));

  // Normalize the y-values against basis.
  Y.forEach((y, i) => (Y[i] = y / basis));

  // Compute default domains
  if (xDomain === undefined) {
    const xExtent = d3.extent(X);
    xDomain = extentIsDefined(xExtent) ? xExtent : [-10, 10];
  }
  if (yDomain === undefined) {
    const yExtent = d3.extent(Y);
    yDomain = extentIsDefined(yExtent) ? yExtent : [-10, 10];
  }
  const zDomain = new d3.InternSet(Z);

  // scales
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);

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

  // const formatXValue = xScale.tickFormat(100, xFormat);
  // const formatYValue = yScale.tickFormat(100, yFormat);
  // const makeTitle = (i: number) =>
  // `${Z[i]}\n${formatXValue(X[i])}, ${formatYValue(Y[i])}`;

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .on("pointerenter", pointerentered)
    .on("pointermove", pointermoved)
    .on("pointerleave", pointerleft)
    .on("touchstart", (event) => event.preventDefault());

  // x axis
  svg
    .append("g")
    .attr("transform", `translate(0,${yScale(xAxisOffset)})`)
    .call(xAxis)
    // x axis label
    .call((g) =>
      g
        .append("text")
        .attr("x", width / 2)
        .attr("y", marginBottom)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
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
    // y axis label
    .call((g) =>
      g
        .append("text")
        .attr("transform", "rotate(270)")
        .attr("x", -height / 2)
        .attr("y", -marginLeft + 20)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(yLabel)
    );

  // line
  const path = (() => {
    if (drawLine) {
      const line = d3
        .line()
        .defined((i) => D[i[0]] ?? false)
        .curve(curve)
        .x(([i]) => xScale(X[i] ?? 0) ?? 0)
        .y(([, i]) => yScale(Y[i] ?? 0) ?? 0);

      const groupedData = d3.group(I, (i) => Z[i]);

      return (
        svg
          .append("g")
          .attr("fill", "none")
          .attr("stroke", typeof color === "string" ? color : null)
          .attr("stroke-linecap", strokeLinecap)
          .attr("stroke-linejoin", strokeLinejoin)
          .attr("stroke-width", strokeWidth)
          .attr("stroke-opacity", strokeOpacity)
          .selectAll("path")
          .data(groupedData)
          .join("path")
          .style("mix-blend-mode", mixBlendMode)
          // .attr("stroke", typeof color === "function" ? ([z]) => color(z) : null)
          .attr("d", ([, i]) => line(i ?? 0))
      );
    }
  })();

  // points
  const points = (() => {
    const groupedDataMap = d3.group(I, (i) => Z[i]);
    const groupedData = Array.from(groupedDataMap.values());
    if (drawPoints) {
      return groupedData.map((d) => {
        return (
          svg
            .append("g")
            .selectAll("circle")
            .data(d)
            // .data(d3.group(I, (i) => Z[i]))
            .enter()
            .append("circle")
            .attr("fill", pointFillColor)
            .attr("fill-opacity", pointFillOpacity)
            .attr("cx", (d, i) => xScale(X[i] ?? 0) ?? 0)
            .attr("cy", (d, i) => yScale(Y[i] ?? 0) ?? 0)
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
  const tooltip = svg.append("g").attr("display", "none");
  // tooltip dot
  tooltip.append("circle").attr("r", 2.5);
  // tooltip bg
  const ttBgWidth = 120;
  const ttBgHeight = 45;
  tooltip
    .append("rect")
    .attr("width", ttBgWidth)
    .attr("height", ttBgHeight)
    .attr("x", -ttBgWidth / 2)
    .attr("y", -ttBgHeight - 17)
    .attr(
      "style",
      "fill:#fff; fill-opacity:0.5; stroke:#000; stroke-opacity:0.5;"
    );
  // tooltip text
  tooltip
    .append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("y", -8);

  function pointermoved(event: PointerEvent) {
    const [xm, ym] = d3.pointer(event);
    // closest point
    const ptIdx = d3.least(I, (i) =>
      Math.hypot(xScale(X[i] ?? 0) ?? 0 - xm, yScale(Y[i] ?? 0) ?? 0 - ym)
    );

    // translate the tooltip
    tooltip.attr(
      "transform",
      `translate(${xScale(X[ptIdx ?? 0] ?? 0)},${yScale(Y[ptIdx ?? 0] ?? 0)})`
    );

    // add tooltip text
    // if (title)
    //   tooltip.select("text").call((text) =>
    //     text
    //       .selectAll("tspan")
    //       .data(title(ptIdx).split(/\n/))
    //       .join("tspan")
    //       .attr("x", 0)
    //       .attr("y", (_, i) => `${(i - 3) * 1.2}em`)
    //       .attr("font-weight", (_, i) => i === 0 && "bold")
    //       .text((d) => d)
    //   );

    // emphasize hovered Z
    // path
    path &&
      path
        .style("stroke", ([z]) => (Z[ptIdx ?? 0] === z ? null : "#ddd"))
        .filter(([z]) => Z[ptIdx ?? 0] === z)
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
    path && path.style("mix-blend-mode", null).style("stroke", "#ddd");
    tooltip.attr("display", null);
  }

  function pointerleft() {
    tooltip.attr("display", "none");
    path && path.style("mix-blend-mode", mixBlendMode).style("stroke", null);
    // svg.node().value = null;
    // svg.dispatch("input", { bubbles: true });
  }

  return svg.node();
};
