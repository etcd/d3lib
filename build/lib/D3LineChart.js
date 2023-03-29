function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import * as d3 from "d3";
import * as Arrays from "../utilities/Arrays";
var extentIsDefined = function(extent) {
    return extent[0] === undefined ? false : true;
};
export var make = function(data, param) {
    var x = param.x, y = param.y, z = param.z, _param_marginTop = param.marginTop, marginTop = _param_marginTop === void 0 ? 20 : _param_marginTop, _param_marginRight = param.marginRight, marginRight = _param_marginRight === void 0 ? 30 : _param_marginRight, _param_marginBottom = param.marginBottom, marginBottom = _param_marginBottom === void 0 ? 30 : _param_marginBottom, _param_marginLeft = param.marginLeft, marginLeft = _param_marginLeft === void 0 ? 40 : _param_marginLeft, _param_width = param.width, width = _param_width === void 0 ? 640 : _param_width, _param_height = param.height, height = _param_height === void 0 ? 400 : _param_height, _param_xType = param.xType, xType = _param_xType === void 0 ? d3.scaleUtc : _param_xType, xDomain = param.xDomain, _param_xRange = param.xRange, xRange = _param_xRange === void 0 ? [
        marginLeft,
        width - marginRight
    ] : _param_xRange, _param_yType = param.yType, yType = _param_yType === void 0 ? d3.scaleLog : _param_yType, yDomain = param.yDomain, _param_yRange = param.yRange, yRange = _param_yRange === void 0 ? [
        height - marginBottom,
        marginTop
    ] : _param_yRange, _param_lineColor = param.lineColor, lineColor = _param_lineColor === void 0 ? "#606060" : _param_lineColor, _param_strokeLinecap = param.strokeLinecap, strokeLinecap = _param_strokeLinecap === void 0 ? "round" : _param_strokeLinecap, _param_strokeLinejoin = param.strokeLinejoin, strokeLinejoin = _param_strokeLinejoin === void 0 ? "round" : _param_strokeLinejoin, _param_strokeWidth = param.strokeWidth, strokeWidth = _param_strokeWidth === void 0 ? 1 : _param_strokeWidth, _param_strokeOpacity = param.strokeOpacity, strokeOpacity = _param_strokeOpacity === void 0 ? 1 : _param_strokeOpacity, _param_xFormat = param.xFormat, xFormat = _param_xFormat === void 0 ? ",.1f" : _param_xFormat, _param_yFormat = param.yFormat, yFormat = _param_yFormat === void 0 ? ",.1f" : _param_yFormat, xLabel = param.xLabel, yLabel = param.yLabel, _param_xAxisOffset = param.xAxisOffset, xAxisOffset = _param_xAxisOffset === void 0 ? 1 : _param_xAxisOffset, _param_drawLine = param.drawLine, drawLine = _param_drawLine === void 0 ? true : _param_drawLine, _param_drawPoints = param.drawPoints, drawPoints = _param_drawPoints === void 0 ? true : _param_drawPoints, _param_pointRadius = param.pointRadius, pointRadius = _param_pointRadius === void 0 ? 0.5 : _param_pointRadius, _param_pointFillColor = param.pointFillColor, pointFillColor = _param_pointFillColor === void 0 ? "#202020" : _param_pointFillColor, _param_pointFillOpacity = param.pointFillOpacity, pointFillOpacity = _param_pointFillOpacity === void 0 ? 0 : _param_pointFillOpacity, _param_pointStrokeColor = param.pointStrokeColor, pointStrokeColor = _param_pointStrokeColor === void 0 ? "#202020" : _param_pointStrokeColor, _param_pointStrokeOpacity = param.pointStrokeOpacity, pointStrokeOpacity = _param_pointStrokeOpacity === void 0 ? 0.5 : _param_pointStrokeOpacity, _param_color = param.color, color = _param_color === void 0 ? "currentColor" : _param_color, _param_mixBlendMode = param.mixBlendMode, mixBlendMode = _param_mixBlendMode === void 0 ? "multiply" : _param_mixBlendMode;
    var pointermoved = function pointermoved(event) {
        // get the position of the pointer
        var _d3_pointer = _slicedToArray(d3.pointer(event), 2), pointerX = _d3_pointer[0], pointerY = _d3_pointer[1];
        // closest datapoint to pointer position
        var closestDp = d3.least(data, function(dp) {
            return Math.hypot(xScale(x(dp)) - pointerX, yScale(y(dp)) - pointerY);
        });
        // translate the tooltip
        tooltipGroup.attr("transform", "translate(".concat(xScale(x(closestDp)), ",").concat(yScale(y(closestDp)), ")"));
        // add tooltip text
        tooltipGroup.select("text").call(function(text) {
            return text.selectAll("tspan").data(makeTitle(closestDp)).join("tspan").attr("x", 0).attr("y", function(_text, i) {
                return "".concat((i - 3) * 1.2, "em");
            }).attr("font-weight", function(_text, i) {
                return i === 0 && "bold";
            }).text(function(text) {
                return text;
            });
        });
        // emphasize hovered Z
        // lines
        lines && lines.style("stroke", function(param) {
            var _param = _slicedToArray(param, 1), zHovered = _param[0];
            return z(closestDp) === zHovered ? null : "#ddd";
        }).filter(function(param) {
            var _param = _slicedToArray(param, 1), zHovered = _param[0];
            return z(closestDp) === zHovered;
        });
        // points
        points && points.map(function(svgPointGroup) {
            svgPointGroup.attr("r", 0);
        });
    };
    var pointerentered = function pointerentered() {
        lines && lines.style("mix-blend-mode", null).style("stroke", "#ddd");
        tooltipGroup.attr("display", null);
    };
    var pointerleft = function pointerleft() {
        tooltipGroup.attr("display", "none");
        lines && lines.style("mix-blend-mode", mixBlendMode).style("stroke", null);
    // svg.node().value = null;
    // svg.dispatch("input", { bubbles: true });
    };
    // Compute default domains
    var defaultXDomain = function() {
        var xExtent = Arrays.extent(data.map(x));
        return extentIsDefined(xExtent) ? xExtent : [
            -10,
            10
        ];
    }();
    var defaultYDomain = function() {
        var yExtent = Arrays.extent(data.map(y));
        return extentIsDefined(yExtent) ? yExtent : [
            -10,
            10
        ];
    }();
    // scales
    var xScale = xType(xDomain !== null && xDomain !== void 0 ? xDomain : defaultXDomain, xRange);
    var yScale = yType(yDomain !== null && yDomain !== void 0 ? yDomain : defaultYDomain, yRange);
    // axes
    var xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(function(d) {
        return d3.format(xFormat)(d);
    });
    var yAxis = d3.axisLeft(yScale).ticks(height / 80).tickFormat(function(d) {
        return d3.format(yFormat)(d);
    });
    // titles (for tooltip)
    var formatXValue = d3.format(xFormat);
    var formatYValue = d3.format(yFormat);
    var makeTitle = function(dp) {
        return [
            z(dp),
            "".concat(formatXValue(x(dp)), ", ").concat(formatYValue(y(dp)))
        ];
    };
    var svg = d3// dimensions
    .create("svg").attr("width", width).attr("height", height).attr("viewBox", [
        0,
        0,
        width,
        height
    ]).attr("style", "max-width: 100%; height: auto; height: intrinsic;")// event handlers
    .on("pointerenter", pointerentered).on("pointermove", pointermoved).on("pointerleave", pointerleft).on("touchstart", function(event) {
        return event.preventDefault();
    });
    // x axis
    svg.append("g").attr("transform", "translate(0,".concat(yScale(xAxisOffset), ")")).call(xAxis).call(function(g) {
        return g.append("text").attr("x", width / 2).attr("y", marginBottom).attr("fill", "currentColor").attr("text-anchor", "start").attr("font-weight", "bold").text(xLabel);
    });
    // y axis
    svg.append("g").attr("transform", "translate(".concat(marginLeft, ",0)")).call(yAxis).call(function(g) {
        return g.select(".domain").remove();
    }).call(function(g) {
        return g.selectAll(".tick line").clone().attr("x2", width - marginLeft - marginRight).attr("stroke-opacity", 0.1);
    }).call(function(g) {
        return g.append("text").attr("transform", "rotate(270)").attr("x", -height / 2).attr("y", -marginLeft + 20).attr("fill", "currentColor").attr("text-anchor", "start").attr("font-weight", "bold").text(yLabel);
    });
    // group data by z
    var dataGroupsByZ = d3.group(data, function(dp) {
        return z(dp);
    });
    // line
    var lines = function() {
        if (drawLine) {
            var makeLine = d3.line()// ensure each point is valid
            .defined(function(param) {
                var _param = _slicedToArray(param, 2), xVal = _param[0], yVal = _param[1];
                return !isNaN(xVal) && !isNaN(yVal);
            })// for each point on the line, scale its coordinates
            .x(function(param) {
                var _param = _slicedToArray(param, 1), xVal = _param[0];
                return xScale(xVal);
            }).y(function(param) {
                var _param = _slicedToArray(param, 2), _xVal = _param[0], yVal = _param[1];
                return yScale(yVal);
            })// interpolation method
            .curve(d3.curveLinear);
            return svg.append("g").attr("fill", "none").attr("stroke", lineColor).attr("stroke-linecap", strokeLinecap).attr("stroke-linejoin", strokeLinejoin).attr("stroke-width", strokeWidth).attr("stroke-opacity", strokeOpacity).selectAll("path").data(dataGroupsByZ).join("path").style("mix-blend-mode", mixBlendMode).attr("d", function(param) {
                var _param = _slicedToArray(param, 2), _z = _param[0], dataGroup = _param[1];
                return makeLine(dataGroup.map(function(dp) {
                    return [
                        x(dp),
                        y(dp)
                    ];
                }));
            });
        }
    }();
    // points
    var points = function() {
        return drawPoints && Array.from(dataGroupsByZ.values()).map(function(dps) {
            return svg.append("g").selectAll("circle").data(dps).join("circle").attr("fill", pointFillColor).attr("fill-opacity", pointFillOpacity).attr("cx", function(dp) {
                return xScale(x(dp));
            }).attr("cy", function(dp) {
                return yScale(y(dp));
            }).attr("stroke", pointStrokeColor).attr("stroke-opacity", pointStrokeOpacity).attr("r", pointRadius);
        });
    }();
    // .map(
    // Array.from(dataGroupsByZ.values()).map((dps) =>
    //   svg
    //     .append("g")
    //     .selectAll("circle")
    //     .data(dps)
    //     .join("circle")
    //     .attr("fill", pointFillColor)
    //     .attr("fill-opacity", pointFillOpacity)
    //     .attr("cx", (dp) => xScale(x(dp))!)
    //     .attr("cy", (dp) => yScale(y(dp))!)
    //     .attr("stroke", pointStrokeColor)
    //     .attr("stroke-opacity", pointStrokeOpacity)
    //     .attr("r", pointRadius)
    // )
    // tooltip
    var tooltipGroup = svg.append("g").attr("display", "none");
    // tooltip dot
    tooltipGroup.append("circle").attr("r", 2.5);
    // tooltip bg
    var ttBgWidth = 120;
    var ttBgHeight = 45;
    tooltipGroup.append("rect").attr("width", ttBgWidth).attr("height", ttBgHeight).attr("x", -ttBgWidth / 2).attr("y", -ttBgHeight - 17).attr("style", "fill:#fff; fill-opacity:0.6; stroke:#000; stroke-opacity:0.5;");
    // tooltip text
    tooltipGroup.append("text").attr("font-family", "sans-serif").attr("font-size", 12).attr("text-anchor", "middle").attr("y", -8);
    return svg.node();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWIvRDNMaW5lQ2hhcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmltcG9ydCAqIGFzIEFycmF5cyBmcm9tIFwiLi4vdXRpbGl0aWVzL0FycmF5c1wiO1xuXG5jb25zdCBleHRlbnRJc0RlZmluZWQgPSAoXG4gIGV4dGVudDogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXSB8IHJlYWRvbmx5IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbik6IGV4dGVudCBpcyByZWFkb25seSBbbnVtYmVyLCBudW1iZXJdID0+XG4gIGV4dGVudFswXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0cnVlO1xuXG5leHBvcnQgY29uc3QgbWFrZSA9IDxUPihcbiAgZGF0YTogVFtdLFxuICB7XG4gICAgeCxcbiAgICB5LFxuICAgIHosXG4gICAgbWFyZ2luVG9wID0gMjAsXG4gICAgbWFyZ2luUmlnaHQgPSAzMCxcbiAgICBtYXJnaW5Cb3R0b20gPSAzMCxcbiAgICBtYXJnaW5MZWZ0ID0gNDAsXG4gICAgd2lkdGggPSA2NDAsXG4gICAgaGVpZ2h0ID0gNDAwLFxuICAgIHhUeXBlID0gZDMuc2NhbGVVdGMsXG4gICAgeERvbWFpbixcbiAgICB4UmFuZ2UgPSBbbWFyZ2luTGVmdCwgd2lkdGggLSBtYXJnaW5SaWdodF0sXG4gICAgeVR5cGUgPSBkMy5zY2FsZUxvZyxcbiAgICB5RG9tYWluLFxuICAgIHlSYW5nZSA9IFtoZWlnaHQgLSBtYXJnaW5Cb3R0b20sIG1hcmdpblRvcF0sXG4gICAgbGluZUNvbG9yID0gXCIjNjA2MDYwXCIsXG4gICAgc3Ryb2tlTGluZWNhcCA9IFwicm91bmRcIixcbiAgICBzdHJva2VMaW5lam9pbiA9IFwicm91bmRcIixcbiAgICBzdHJva2VXaWR0aCA9IDEsXG4gICAgc3Ryb2tlT3BhY2l0eSA9IDEsXG4gICAgeEZvcm1hdCA9IFwiLC4xZlwiLFxuICAgIHlGb3JtYXQgPSBcIiwuMWZcIixcbiAgICB4TGFiZWwsXG4gICAgeUxhYmVsLFxuXG4gICAgeEF4aXNPZmZzZXQgPSAxLFxuXG4gICAgZHJhd0xpbmUgPSB0cnVlLFxuICAgIGRyYXdQb2ludHMgPSB0cnVlLFxuICAgIHBvaW50UmFkaXVzID0gMC41LFxuICAgIHBvaW50RmlsbENvbG9yID0gXCIjMjAyMDIwXCIsXG4gICAgcG9pbnRGaWxsT3BhY2l0eSA9IDAsXG4gICAgcG9pbnRTdHJva2VDb2xvciA9IFwiIzIwMjAyMFwiLFxuICAgIHBvaW50U3Ryb2tlT3BhY2l0eSA9IDAuNSxcblxuICAgIGNvbG9yID0gXCJjdXJyZW50Q29sb3JcIixcbiAgICBtaXhCbGVuZE1vZGUgPSBcIm11bHRpcGx5XCIsXG4gIH06IHtcbiAgICAvKiogZ2l2ZW4gZGF0YXBvaW50LCByZXR1cm5zIHRoZSAodGVtcG9yYWwpIHgtdmFsdWUgKi9cbiAgICByZWFkb25seSB4OiAocDogVCkgPT4gbnVtYmVyO1xuICAgIC8qKiBnaXZlbiBkYXRhcG9pbnQsIHJldHVybnMgdGhlIChxdWFudGl0YXRpdmUpIHktdmFsdWUgKi9cbiAgICByZWFkb25seSB5OiAocDogVCkgPT4gbnVtYmVyO1xuICAgIC8qKiBnaXZlbiBkYXRhcG9pbnQsIHJldHVybnMgdGhlIChjYXRlZ29yaWNhbCkgei12YWx1ZSAqL1xuICAgIHJlYWRvbmx5IHo6IChwOiBUKSA9PiBudW1iZXIgfCBzdHJpbmc7XG4gICAgLyoqIHRvcCBtYXJnaW4gKHB4KSAqL1xuICAgIHJlYWRvbmx5IG1hcmdpblRvcDogbnVtYmVyO1xuICAgIC8qKiByaWdodCBtYXJnaW4gKHB4KSAqL1xuICAgIHJlYWRvbmx5IG1hcmdpblJpZ2h0OiBudW1iZXI7XG4gICAgLyoqIGJvdHRvbSBtYXJnaW4gKHB4KSAqL1xuICAgIHJlYWRvbmx5IG1hcmdpbkJvdHRvbTogbnVtYmVyO1xuICAgIC8qKiBsZWZ0IG1hcmdpbiAocHgpICovXG4gICAgcmVhZG9ubHkgbWFyZ2luTGVmdDogbnVtYmVyO1xuICAgIC8qKiBvdXRlciB3aWR0aCBvZiBjaGFydCAocHgpICovXG4gICAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgICAvKiogb3V0ZXIgaGVpZ2h0IG9mIGNoYXJ0IChweCkgKi9cbiAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byByZXR1cm4gdGhlIHgtc2NhbGUgdHlwZS4gVmFsaWQgc2NhbGVzXG4gICAgICogYXJlIG9uZXMgd2l0aCB0aGUgYHRpY2tGb3JtYXRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHhUeXBlOiAoXG4gICAgICBkb21haW46IEl0ZXJhYmxlPGQzLk51bWJlclZhbHVlPixcbiAgICAgIHJhbmdlOiBJdGVyYWJsZTxudW1iZXI+XG4gICAgKSA9PiBkMy5BeGlzU2NhbGU8RGF0ZSB8IGQzLk51bWJlclZhbHVlPjtcbiAgICAvKiogeCBkb21haW4gbWluIGFuZCBtYXggKi9cbiAgICByZWFkb25seSB4RG9tYWluPzogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcbiAgICAvKiogeCByYW5nZSBtaW4gYW5kIG1heCAqL1xuICAgIHJlYWRvbmx5IHhSYW5nZTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byByZXR1cm4gdGhlIHktc2NhbGUgdHlwZS4gVmFsaWQgc2NhbGVzXG4gICAgICogYXJlIG9uZXMgd2l0aCB0aGUgYHRpY2tGb3JtYXRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHlUeXBlOiAoXG4gICAgICBkb21haW46IEl0ZXJhYmxlPGQzLk51bWJlclZhbHVlPixcbiAgICAgIHJhbmdlOiBJdGVyYWJsZTxudW1iZXI+XG4gICAgKSA9PiBkMy5BeGlzU2NhbGU8RGF0ZSB8IGQzLk51bWJlclZhbHVlPjtcbiAgICAvKiogeSBkb21haW4gbWluIGFuZCBtYXggKi9cbiAgICByZWFkb25seSB5RG9tYWluPzogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcbiAgICAvKiogeSByYW5nZSBtaW4gYW5kIG1heCAqL1xuICAgIHJlYWRvbmx5IHlSYW5nZTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXTtcbiAgICAvKiogc3Ryb2tlIGNvbG9yIG9mIGxpbmUgKi9cbiAgICByZWFkb25seSBsaW5lQ29sb3I6IHN0cmluZztcbiAgICAvKiogc3Ryb2tlIGxpbmUgY2FwIG9mIHRoZSBsaW5lICovXG4gICAgcmVhZG9ubHkgc3Ryb2tlTGluZWNhcDogc3RyaW5nO1xuICAgIC8qKiBzdHJva2UgbGluZSBqb2luIG9mIHRoZSBsaW5lICovXG4gICAgcmVhZG9ubHkgc3Ryb2tlTGluZWpvaW46IHN0cmluZztcbiAgICAvKiogc3Ryb2tlIHdpZHRoIG9mIGxpbmUgKHB4KSAqL1xuICAgIHJlYWRvbmx5IHN0cm9rZVdpZHRoOiBudW1iZXI7XG4gICAgLyoqIHN0cm9rZSBvcGFjaXR5IG9mIGxpbmUgKi9cbiAgICByZWFkb25seSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG4gICAgLyoqIGEgZm9ybWF0IHNwZWNpZmllciBzdHJpbmcgZm9yIHRoZSB4LWF4aXMgKi9cbiAgICByZWFkb25seSB4Rm9ybWF0OiBzdHJpbmc7XG4gICAgLyoqIGEgZm9ybWF0IHNwZWNpZmllciBzdHJpbmcgZm9yIHRoZSB5LWF4aXMgKi9cbiAgICByZWFkb25seSB5Rm9ybWF0OiBzdHJpbmc7XG4gICAgLyoqIHgtYXhpcyBsYWJlbCAqL1xuICAgIHJlYWRvbmx5IHhMYWJlbDogc3RyaW5nO1xuICAgIC8qKiB5LWF4aXMgbGFiZWwgKi9cbiAgICByZWFkb25seSB5TGFiZWw6IHN0cmluZztcbiAgICAvKiogdGhlIHkgdmFsdWUgYXQgd2hpY2ggdG8gcmVuZGVyIHRoZSB4IGF4aXMgKHVzZWZ1bCBmb3IgbG9nIHNjYWxlcyB0aGF0IGRvbid0IGhhdmUgeT0wKSAqL1xuICAgIHJlYWRvbmx5IHhBeGlzT2Zmc2V0OiBudW1iZXI7XG5cbiAgICAvKiogd2hldGhlciB0byBkcmF3IHRoZSBsaW5lcyBjb25uZWN0aW5nIGRhdGEgcG9pbnRzICovXG4gICAgcmVhZG9ubHkgZHJhd0xpbmU6IGJvb2xlYW47XG4gICAgLyoqIHdoZXRoZXIgdG8gZHJhdyB0aGUgZGF0YSBwb2ludHMgKi9cbiAgICByZWFkb25seSBkcmF3UG9pbnRzOiBib29sZWFuO1xuICAgIC8qKiBwb2ludCByYWRpdXMgKi9cbiAgICByZWFkb25seSBwb2ludFJhZGl1czogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHBvaW50RmlsbENvbG9yOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcG9pbnRGaWxsT3BhY2l0eTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHBvaW50U3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICByZWFkb25seSBwb2ludFN0cm9rZU9wYWNpdHk6IG51bWJlcjtcbiAgICAvKiogc3Ryb2tlIGNvbG9yIG9mIGxpbmUsIGFzIGEgY29uc3RhbnQgb3IgYSBmdW5jdGlvbiBvZiB6ICovXG4gICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZztcbiAgICAvKiogYmxlbmQgbW9kZSBvZiBsaW5lcyAqL1xuICAgIHJlYWRvbmx5IG1peEJsZW5kTW9kZTogc3RyaW5nO1xuICB9XG4pID0+IHtcbiAgLy8gQ29tcHV0ZSBkZWZhdWx0IGRvbWFpbnNcbiAgY29uc3QgZGVmYXVsdFhEb21haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHhFeHRlbnQgPSBBcnJheXMuZXh0ZW50KGRhdGEubWFwKHgpKTtcbiAgICByZXR1cm4gZXh0ZW50SXNEZWZpbmVkKHhFeHRlbnQpID8geEV4dGVudCA6IFstMTAsIDEwXTtcbiAgfSkoKTtcbiAgY29uc3QgZGVmYXVsdFlEb21haW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHlFeHRlbnQgPSBBcnJheXMuZXh0ZW50KGRhdGEubWFwKHkpKTtcbiAgICByZXR1cm4gZXh0ZW50SXNEZWZpbmVkKHlFeHRlbnQpID8geUV4dGVudCA6IFstMTAsIDEwXTtcbiAgfSkoKTtcblxuICAvLyBzY2FsZXNcbiAgY29uc3QgeFNjYWxlID0geFR5cGUoeERvbWFpbiA/PyBkZWZhdWx0WERvbWFpbiwgeFJhbmdlKTtcbiAgY29uc3QgeVNjYWxlID0geVR5cGUoeURvbWFpbiA/PyBkZWZhdWx0WURvbWFpbiwgeVJhbmdlKTtcblxuICAvLyBheGVzXG4gIGNvbnN0IHhBeGlzID0gZDNcbiAgICAuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgLnRpY2tzKHdpZHRoIC8gODApXG4gICAgLnRpY2tTaXplT3V0ZXIoMClcbiAgICAudGlja0Zvcm1hdCgoZCkgPT4gZDMuZm9ybWF0KHhGb3JtYXQpKGQpKTtcbiAgY29uc3QgeUF4aXMgPSBkM1xuICAgIC5heGlzTGVmdCh5U2NhbGUpXG4gICAgLnRpY2tzKGhlaWdodCAvIDgwKVxuICAgIC50aWNrRm9ybWF0KChkKSA9PiBkMy5mb3JtYXQoeUZvcm1hdCkoZCkpO1xuXG4gIC8vIHRpdGxlcyAoZm9yIHRvb2x0aXApXG4gIGNvbnN0IGZvcm1hdFhWYWx1ZSA9IGQzLmZvcm1hdCh4Rm9ybWF0KTtcbiAgY29uc3QgZm9ybWF0WVZhbHVlID0gZDMuZm9ybWF0KHlGb3JtYXQpO1xuICBjb25zdCBtYWtlVGl0bGUgPSAoZHA6IFQpID0+IFtcbiAgICB6KGRwKSxcbiAgICBgJHtmb3JtYXRYVmFsdWUoeChkcCkpfSwgJHtmb3JtYXRZVmFsdWUoeShkcCkpfWAsXG4gIF07XG5cbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAvLyBkaW1lbnNpb25zXG4gICAgLmNyZWF0ZShcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pXG4gICAgLmF0dHIoXCJzdHlsZVwiLCBcIm1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBoZWlnaHQ6IGludHJpbnNpYztcIilcbiAgICAvLyBldmVudCBoYW5kbGVyc1xuICAgIC5vbihcInBvaW50ZXJlbnRlclwiLCBwb2ludGVyZW50ZXJlZClcbiAgICAub24oXCJwb2ludGVybW92ZVwiLCBwb2ludGVybW92ZWQpXG4gICAgLm9uKFwicG9pbnRlcmxlYXZlXCIsIHBvaW50ZXJsZWZ0KVxuICAgIC5vbihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcblxuICAvLyB4IGF4aXNcbiAgc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHt5U2NhbGUoeEF4aXNPZmZzZXQpfSlgKVxuICAgIC5jYWxsKHhBeGlzKVxuICAgIC5jYWxsKChnKSA9PlxuICAgICAgZ1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInhcIiwgd2lkdGggLyAyKVxuICAgICAgICAuYXR0cihcInlcIiwgbWFyZ2luQm90dG9tKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC13ZWlnaHRcIiwgXCJib2xkXCIpXG4gICAgICAgIC50ZXh0KHhMYWJlbClcbiAgICApO1xuXG4gIC8vIHkgYXhpc1xuICBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW5MZWZ0fSwwKWApXG4gICAgLmNhbGwoeUF4aXMpXG4gICAgLmNhbGwoKGcpID0+IGcuc2VsZWN0KFwiLmRvbWFpblwiKS5yZW1vdmUoKSlcbiAgICAuY2FsbCgoZykgPT5cbiAgICAgIGdcbiAgICAgICAgLnNlbGVjdEFsbChcIi50aWNrIGxpbmVcIilcbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aCAtIG1hcmdpbkxlZnQgLSBtYXJnaW5SaWdodClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjEpXG4gICAgKVxuICAgIC5jYWxsKChnKSA9PlxuICAgICAgZ1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgyNzApXCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCAtaGVpZ2h0IC8gMilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIC1tYXJnaW5MZWZ0ICsgMjApXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIilcbiAgICAgICAgLnRleHQoeUxhYmVsKVxuICAgICk7XG5cbiAgLy8gZ3JvdXAgZGF0YSBieSB6XG4gIGNvbnN0IGRhdGFHcm91cHNCeVogPSBkMy5ncm91cChkYXRhLCAoZHApID0+IHooZHApKTtcblxuICAvLyBsaW5lXG4gIGNvbnN0IGxpbmVzID0gKCgpID0+IHtcbiAgICBpZiAoZHJhd0xpbmUpIHtcbiAgICAgIGNvbnN0IG1ha2VMaW5lID0gZDNcbiAgICAgICAgLmxpbmUoKVxuICAgICAgICAvLyBlbnN1cmUgZWFjaCBwb2ludCBpcyB2YWxpZFxuICAgICAgICAuZGVmaW5lZCgoW3hWYWwsIHlWYWxdKSA9PiAhaXNOYU4oeFZhbCkgJiYgIWlzTmFOKHlWYWwpKVxuICAgICAgICAvLyBmb3IgZWFjaCBwb2ludCBvbiB0aGUgbGluZSwgc2NhbGUgaXRzIGNvb3JkaW5hdGVzXG4gICAgICAgIC54KChbeFZhbF0pID0+IHhTY2FsZSh4VmFsKSEpXG4gICAgICAgIC55KChbX3hWYWwsIHlWYWxdKSA9PiB5U2NhbGUoeVZhbCkhKVxuICAgICAgICAvLyBpbnRlcnBvbGF0aW9uIG1ldGhvZFxuICAgICAgICAuY3VydmUoZDMuY3VydmVMaW5lYXIpO1xuXG4gICAgICByZXR1cm4gc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgbGluZUNvbG9yKVxuICAgICAgICAuYXR0cihcInN0cm9rZS1saW5lY2FwXCIsIHN0cm9rZUxpbmVjYXApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLWxpbmVqb2luXCIsIHN0cm9rZUxpbmVqb2luKVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBzdHJva2VXaWR0aClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utb3BhY2l0eVwiLCBzdHJva2VPcGFjaXR5KVxuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShkYXRhR3JvdXBzQnlaKVxuICAgICAgICAuam9pbihcInBhdGhcIilcbiAgICAgICAgLnN0eWxlKFwibWl4LWJsZW5kLW1vZGVcIiwgbWl4QmxlbmRNb2RlKVxuICAgICAgICAuYXR0cihcImRcIiwgKFtfeiwgZGF0YUdyb3VwXSkgPT5cbiAgICAgICAgICBtYWtlTGluZShkYXRhR3JvdXAubWFwKChkcCkgPT4gW3goZHApLCB5KGRwKV0pKVxuICAgICAgICApO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBwb2ludHNcbiAgY29uc3QgcG9pbnRzID0gKCgpID0+XG4gICAgZHJhd1BvaW50cyAmJlxuICAgIEFycmF5LmZyb20oZGF0YUdyb3Vwc0J5Wi52YWx1ZXMoKSkubWFwKChkcHMpID0+IHtcbiAgICAgIHJldHVybiBzdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuICAgICAgICAuZGF0YShkcHMpXG4gICAgICAgIC5qb2luKFwiY2lyY2xlXCIpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBwb2ludEZpbGxDb2xvcilcbiAgICAgICAgLmF0dHIoXCJmaWxsLW9wYWNpdHlcIiwgcG9pbnRGaWxsT3BhY2l0eSlcbiAgICAgICAgLmF0dHIoXCJjeFwiLCAoZHApID0+IHhTY2FsZSh4KGRwKSkhKVxuICAgICAgICAuYXR0cihcImN5XCIsIChkcCkgPT4geVNjYWxlKHkoZHApKSEpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIHBvaW50U3Ryb2tlQ29sb3IpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgcG9pbnRTdHJva2VPcGFjaXR5KVxuICAgICAgICAuYXR0cihcInJcIiwgcG9pbnRSYWRpdXMpO1xuICAgIH0pKSgpO1xuICAvLyAubWFwKFxuICAvLyBBcnJheS5mcm9tKGRhdGFHcm91cHNCeVoudmFsdWVzKCkpLm1hcCgoZHBzKSA9PlxuICAvLyAgIHN2Z1xuICAvLyAgICAgLmFwcGVuZChcImdcIilcbiAgLy8gICAgIC5zZWxlY3RBbGwoXCJjaXJjbGVcIilcbiAgLy8gICAgIC5kYXRhKGRwcylcbiAgLy8gICAgIC5qb2luKFwiY2lyY2xlXCIpXG4gIC8vICAgICAuYXR0cihcImZpbGxcIiwgcG9pbnRGaWxsQ29sb3IpXG4gIC8vICAgICAuYXR0cihcImZpbGwtb3BhY2l0eVwiLCBwb2ludEZpbGxPcGFjaXR5KVxuICAvLyAgICAgLmF0dHIoXCJjeFwiLCAoZHApID0+IHhTY2FsZSh4KGRwKSkhKVxuICAvLyAgICAgLmF0dHIoXCJjeVwiLCAoZHApID0+IHlTY2FsZSh5KGRwKSkhKVxuICAvLyAgICAgLmF0dHIoXCJzdHJva2VcIiwgcG9pbnRTdHJva2VDb2xvcilcbiAgLy8gICAgIC5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgcG9pbnRTdHJva2VPcGFjaXR5KVxuICAvLyAgICAgLmF0dHIoXCJyXCIsIHBvaW50UmFkaXVzKVxuICAvLyApXG5cbiAgLy8gdG9vbHRpcFxuICBjb25zdCB0b29sdGlwR3JvdXAgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIC8vIHRvb2x0aXAgZG90XG4gIHRvb2x0aXBHcm91cC5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInJcIiwgMi41KTtcbiAgLy8gdG9vbHRpcCBiZ1xuICBjb25zdCB0dEJnV2lkdGggPSAxMjA7XG4gIGNvbnN0IHR0QmdIZWlnaHQgPSA0NTtcbiAgdG9vbHRpcEdyb3VwXG4gICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHR0QmdXaWR0aClcbiAgICAuYXR0cihcImhlaWdodFwiLCB0dEJnSGVpZ2h0KVxuICAgIC5hdHRyKFwieFwiLCAtdHRCZ1dpZHRoIC8gMilcbiAgICAuYXR0cihcInlcIiwgLXR0QmdIZWlnaHQgLSAxNylcbiAgICAuYXR0cihcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIFwiZmlsbDojZmZmOyBmaWxsLW9wYWNpdHk6MC42OyBzdHJva2U6IzAwMDsgc3Ryb2tlLW9wYWNpdHk6MC41O1wiXG4gICAgKTtcbiAgLy8gdG9vbHRpcCB0ZXh0XG4gIHRvb2x0aXBHcm91cFxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLmF0dHIoXCJ5XCIsIC04KTtcblxuICBmdW5jdGlvbiBwb2ludGVybW92ZWQoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgIC8vIGdldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvaW50ZXJcbiAgICBjb25zdCBbcG9pbnRlclgsIHBvaW50ZXJZXSA9IGQzLnBvaW50ZXIoZXZlbnQpO1xuXG4gICAgLy8gY2xvc2VzdCBkYXRhcG9pbnQgdG8gcG9pbnRlciBwb3NpdGlvblxuICAgIGNvbnN0IGNsb3Nlc3REcCA9IGQzLmxlYXN0KGRhdGEsIChkcCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguaHlwb3QoeFNjYWxlKHgoZHApKSEgLSBwb2ludGVyWCwgeVNjYWxlKHkoZHApKSEgLSBwb2ludGVyWSk7XG4gICAgfSk7XG5cbiAgICAvLyB0cmFuc2xhdGUgdGhlIHRvb2x0aXBcbiAgICB0b29sdGlwR3JvdXAuYXR0cihcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBgdHJhbnNsYXRlKCR7eFNjYWxlKHgoY2xvc2VzdERwISkpfSwke3lTY2FsZSh5KGNsb3Nlc3REcCEpKX0pYFxuICAgICk7XG5cbiAgICAvLyBhZGQgdG9vbHRpcCB0ZXh0XG4gICAgdG9vbHRpcEdyb3VwLnNlbGVjdChcInRleHRcIikuY2FsbCgodGV4dCkgPT5cbiAgICAgIHRleHRcbiAgICAgICAgLnNlbGVjdEFsbChcInRzcGFuXCIpXG4gICAgICAgIC5kYXRhKG1ha2VUaXRsZShjbG9zZXN0RHAhKSlcbiAgICAgICAgLmpvaW4oXCJ0c3BhblwiKVxuICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ5XCIsIChfdGV4dCwgaSkgPT4gYCR7KGkgLSAzKSAqIDEuMn1lbWApXG4gICAgICAgIC5hdHRyKFwiZm9udC13ZWlnaHRcIiwgKF90ZXh0LCBpKSA9PiBpID09PSAwICYmIFwiYm9sZFwiKVxuICAgICAgICAudGV4dCgodGV4dCkgPT4gdGV4dClcbiAgICApO1xuXG4gICAgLy8gZW1waGFzaXplIGhvdmVyZWQgWlxuICAgIC8vIGxpbmVzXG4gICAgbGluZXMgJiZcbiAgICAgIGxpbmVzXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCAoW3pIb3ZlcmVkXSkgPT5cbiAgICAgICAgICB6KGNsb3Nlc3REcCEpID09PSB6SG92ZXJlZCA/IG51bGwgOiBcIiNkZGRcIlxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoKFt6SG92ZXJlZF0pID0+IHooY2xvc2VzdERwISkgPT09IHpIb3ZlcmVkKTtcblxuICAgIC8vIHBvaW50c1xuICAgIHBvaW50cyAmJlxuICAgICAgcG9pbnRzLm1hcCgoc3ZnUG9pbnRHcm91cCkgPT4ge1xuICAgICAgICBzdmdQb2ludEdyb3VwLmF0dHIoXCJyXCIsIDApO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyZW50ZXJlZCgpIHtcbiAgICBsaW5lcyAmJiBsaW5lcy5zdHlsZShcIm1peC1ibGVuZC1tb2RlXCIsIG51bGwpLnN0eWxlKFwic3Ryb2tlXCIsIFwiI2RkZFwiKTtcbiAgICB0b29sdGlwR3JvdXAuYXR0cihcImRpc3BsYXlcIiwgbnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVybGVmdCgpIHtcbiAgICB0b29sdGlwR3JvdXAuYXR0cihcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGxpbmVzICYmIGxpbmVzLnN0eWxlKFwibWl4LWJsZW5kLW1vZGVcIiwgbWl4QmxlbmRNb2RlKS5zdHlsZShcInN0cm9rZVwiLCBudWxsKTtcbiAgICAvLyBzdmcubm9kZSgpLnZhbHVlID0gbnVsbDtcbiAgICAvLyBzdmcuZGlzcGF0Y2goXCJpbnB1dFwiLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICByZXR1cm4gc3ZnLm5vZGUoKTtcbn07XG4iXSwibmFtZXMiOlsiZDMiLCJBcnJheXMiLCJleHRlbnRJc0RlZmluZWQiLCJleHRlbnQiLCJ1bmRlZmluZWQiLCJtYWtlIiwiZGF0YSIsIngiLCJ5IiwieiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwieFR5cGUiLCJzY2FsZVV0YyIsInhEb21haW4iLCJ4UmFuZ2UiLCJ5VHlwZSIsInNjYWxlTG9nIiwieURvbWFpbiIsInlSYW5nZSIsImxpbmVDb2xvciIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT3BhY2l0eSIsInhGb3JtYXQiLCJ5Rm9ybWF0IiwieExhYmVsIiwieUxhYmVsIiwieEF4aXNPZmZzZXQiLCJkcmF3TGluZSIsImRyYXdQb2ludHMiLCJwb2ludFJhZGl1cyIsInBvaW50RmlsbENvbG9yIiwicG9pbnRGaWxsT3BhY2l0eSIsInBvaW50U3Ryb2tlQ29sb3IiLCJwb2ludFN0cm9rZU9wYWNpdHkiLCJjb2xvciIsIm1peEJsZW5kTW9kZSIsInBvaW50ZXJtb3ZlZCIsImV2ZW50IiwicG9pbnRlciIsInBvaW50ZXJYIiwicG9pbnRlclkiLCJjbG9zZXN0RHAiLCJsZWFzdCIsImRwIiwiTWF0aCIsImh5cG90IiwieFNjYWxlIiwieVNjYWxlIiwidG9vbHRpcEdyb3VwIiwiYXR0ciIsInNlbGVjdCIsImNhbGwiLCJ0ZXh0Iiwic2VsZWN0QWxsIiwibWFrZVRpdGxlIiwiam9pbiIsIl90ZXh0IiwiaSIsImxpbmVzIiwic3R5bGUiLCJ6SG92ZXJlZCIsImZpbHRlciIsInBvaW50cyIsIm1hcCIsInN2Z1BvaW50R3JvdXAiLCJwb2ludGVyZW50ZXJlZCIsInBvaW50ZXJsZWZ0IiwiZGVmYXVsdFhEb21haW4iLCJ4RXh0ZW50IiwiZGVmYXVsdFlEb21haW4iLCJ5RXh0ZW50IiwieEF4aXMiLCJheGlzQm90dG9tIiwidGlja3MiLCJ0aWNrU2l6ZU91dGVyIiwidGlja0Zvcm1hdCIsImQiLCJmb3JtYXQiLCJ5QXhpcyIsImF4aXNMZWZ0IiwiZm9ybWF0WFZhbHVlIiwiZm9ybWF0WVZhbHVlIiwic3ZnIiwiY3JlYXRlIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZCIsImciLCJyZW1vdmUiLCJjbG9uZSIsImRhdGFHcm91cHNCeVoiLCJncm91cCIsIm1ha2VMaW5lIiwibGluZSIsImRlZmluZWQiLCJ4VmFsIiwieVZhbCIsImlzTmFOIiwiX3hWYWwiLCJjdXJ2ZSIsImN1cnZlTGluZWFyIiwiX3oiLCJkYXRhR3JvdXAiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJkcHMiLCJ0dEJnV2lkdGgiLCJ0dEJnSGVpZ2h0Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFFBQVEsS0FBSztBQUV6QixZQUFZQyxZQUFZLHNCQUFzQjtBQUU5QyxJQUFNQyxrQkFBa0IsU0FDdEJDO1dBRUFBLE1BQU0sQ0FBQyxFQUFFLEtBQUtDLFlBQVksS0FBSyxH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