function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { Axis, Orientation } from "@visx/axis";
import { LinePath } from "@visx/shape";
import { scaleLinear, scaleLog, scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import ReactDOM from "react-dom/client";
import { curveLinear } from "@visx/curve";
import { LegendOrdinal, LegendItem, LegendLabel } from "@visx/legend";
import { groupBy } from "../utilities/Arrays";
import { Fragment, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../utilities/useWindowSize";
import { evenlySpacedColors, rgbArrayToString } from "../utilities/Colors";
// import "./ReactLineChart.css";
import { formatNumber } from "../utilities/Numbers";
var DEFAULT_MARGINS = {
    left: 10,
    top: 50,
    right: 50,
    bottom: 10
};
export var Chart = function(props) {
    var _Math, _Math1;
    // destructure props
    var // data
    data = props.data, getX = props.getX, getY = props.getY, getZ = props.getZ, xAxisLabel = props.xAxisLabel, yAxisLabel = props.yAxisLabel, // display
    height = props.height, width = props.width, margins = props.margins, _props_axisWidth = props.axisWidth, axisWidth = _props_axisWidth === void 0 ? 50 : _props_axisWidth, _props_axisColor = props.axisColor, axisColor = _props_axisColor === void 0 ? "#000000" : _props_axisColor, _props_pointRadius = props.pointRadius, pointRadius = _props_pointRadius === void 0 ? 1.3 : _props_pointRadius, _props_pointOpacity = props.pointOpacity, pointOpacity = _props_pointOpacity === void 0 ? 1 : _props_pointOpacity, _props_lineWidth = props.lineWidth, lineWidth = _props_lineWidth === void 0 ? 1 : _props_lineWidth, _props_showPoints = props.showPoints, showPoints = _props_showPoints === void 0 ? false : _props_showPoints, _props_showLines = props.showLines, showLines = _props_showLines === void 0 ? true : _props_showLines, _props_showEndpointLabels = props.showEndpointLabels, showEndpointLabels = _props_showEndpointLabels === void 0 ? false : _props_showEndpointLabels, _props_chartType = props.chartType, chartType = _props_chartType === void 0 ? "linear" : _props_chartType, yDomain = props.yDomain, xAxisLocation = props.xAxisLocation;
    // window size
    var windowSize = useWindowSize();
    // dimensions
    var ref = useRef(null);
    var _useState = _slicedToArray(useState(0), 2), measuredWidth = _useState[0], setMeasuredWidth = _useState[1];
    var _useState1 = _slicedToArray(useState(0), 2), measuredTop = _useState1[0], setMeasuredTop = _useState1[1];
    var _useState2 = _slicedToArray(useState(0), 2), measuredLeft = _useState2[0], setMeasuredLeft = _useState2[1];
    // closest datapoint
    var _useState3 = _slicedToArray(useState(undefined), 2), closestDp = _useState3[0], setClosestDp = _useState3[1];
    var closestDpGroup = closestDp && getZ ? getZ(closestDp) : undefined;
    // get dimensions
    useEffect(function() {
        var current = ref.current;
        if (!current) return undefined;
        var boundingRect = current.getBoundingClientRect();
        setMeasuredTop(boundingRect.top);
        setMeasuredLeft(boundingRect.left);
        setMeasuredWidth(current.clientWidth);
    }, [
        windowSize
    ]);
    // group data by z
    var dataGroups = getZ !== undefined ? groupBy(data, getZ) : undefined;
    // get colors
    var groupColorsArray = evenlySpacedColors(dataGroups !== undefined ? Object.keys(dataGroups).length : 1, 1, 0.75);
    if (!groupColorsArray) return null;
    var groupColorsMap = dataGroups !== undefined ? Object.fromEntries(Object.keys(dataGroups).map(function(groupName, i) {
        return [
            groupName,
            groupColorsArray[i]
        ];
    })) : undefined;
    // x scale
    var xValues = data.map(getX);
    var _margins_left, _margins_right;
    var xScale = scaleLinear({
        domain: [
            (_Math = Math).min.apply(_Math, _toConsumableArray(xValues)),
            (_Math1 = Math).max.apply(_Math1, _toConsumableArray(xValues))
        ],
        range: [
            ((_margins_left = margins === null || margins === void 0 ? void 0 : margins.left) !== null && _margins_left !== void 0 ? _margins_left : DEFAULT_MARGINS.left) + axisWidth,
            measuredWidth - ((_margins_right = margins === null || margins === void 0 ? void 0 : margins.right) !== null && _margins_right !== void 0 ? _margins_right : DEFAULT_MARGINS.right)
        ]
    });
    // y scale type
    var yScaleType = function() {
        switch(chartType){
            case "linear":
                return scaleLinear;
            case "log":
                return scaleLog;
        }
    }();
    // y scale domain
    var yScaleDomain = function() {
        var yValues = data.map(getY);
        if (yDomain !== undefined) return yDomain;
        switch(chartType){
            case "linear":
                var _Math, _Math1;
                return [
                    (_Math = Math).min.apply(_Math, _toConsumableArray(yValues)),
                    (_Math1 = Math).max.apply(_Math1, _toConsumableArray(yValues))
                ];
            case "log":
                var _Math2;
                return [
                    1,
                    (_Math2 = Math).max.apply(_Math2, _toConsumableArray(yValues))
                ];
        }
    }();
    var _margins_bottom, _margins_top;
    // y scale
    var yScale = yScaleType({
        domain: yScaleDomain,
        range: [
            height - axisWidth - ((_margins_bottom = margins === null || margins === void 0 ? void 0 : margins.bottom) !== null && _margins_bottom !== void 0 ? _margins_bottom : DEFAULT_MARGINS.bottom),
            (_margins_top = margins === null || margins === void 0 ? void 0 : margins.top) !== null && _margins_top !== void 0 ? _margins_top : DEFAULT_MARGINS.top
        ]
    });
    // legend scale
    var legendScale = function() {
        if (dataGroups === undefined) return undefined;
        var sortedGroups = Object.entries(dataGroups).sort(function(groupA, groupB) {
            var _groupA = _slicedToArray(groupA, 2), _groupAName = _groupA[0], groupAData = _groupA[1];
            var _groupB = _slicedToArray(groupB, 2), _groupBName = _groupB[0], groupBData = _groupB[1];
            var lastADp = groupAData[groupAData.length - 1];
            var lastBDp = groupBData[groupBData.length - 1];
            var finalAValue = lastADp ? getY(lastADp) : undefined;
            var finalBValue = lastBDp ? getY(lastBDp) : undefined;
            if (finalAValue === undefined) return -1;
            if (finalBValue === undefined) return 1;
            return -1 * (finalAValue - finalBValue);
        });
        var _groupColorsMap_groupName;
        return scaleOrdinal({
            domain: sortedGroups.map(function(param) {
                var _param = _slicedToArray(param, 1), groupName = _param[0];
                return groupName;
            }),
            range: sortedGroups.map(function(param) {
                var _param = _slicedToArray(param, 1), groupName = _param[0];
                return rgbArrayToString((_groupColorsMap_groupName = groupColorsMap === null || groupColorsMap === void 0 ? void 0 : groupColorsMap[groupName]) !== null && _groupColorsMap_groupName !== void 0 ? _groupColorsMap_groupName : [
                    0,
                    0,
                    0
                ]);
            })
        });
    }();
    var _margins_top1, _margins_left1, _groupColorsArray_, _groupColorsArray_1, _margins_bottom1, _margins_left2;
    // chart
    var chart = /*#__PURE__*/ React.createElement("div", {
        style: {
            position: "relative",
            fontSize: 12,
            fontFamily: "sans-serif"
        }
    }, legendScale && /*#__PURE__*/ React.createElement("div", {
        style: {
            position: "absolute",
            top: (_margins_top1 = margins === null || margins === void 0 ? void 0 : margins.top) !== null && _margins_top1 !== void 0 ? _margins_top1 : DEFAULT_MARGINS.top,
            left: ((_margins_left1 = margins === null || margins === void 0 ? void 0 : margins.left) !== null && _margins_left1 !== void 0 ? _margins_left1 : DEFAULT_MARGINS.left) + axisWidth,
            margin: "0 20px",
            padding: "0 10px",
            border: "1px solid black",
            borderRadius: 4
        }
    }, /*#__PURE__*/ React.createElement(LegendOrdinal, {
        scale: legendScale
    }, function(labels) {
        return /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                gap: 10
            }
        }, labels.map(function(label, i) {
            return /*#__PURE__*/ React.createElement(LegendItem, {
                key: i
            }, /*#__PURE__*/ React.createElement("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                }
            }, /*#__PURE__*/ React.createElement("svg", {
                width: 10,
                height: 10
            }, /*#__PURE__*/ React.createElement("rect", {
                fill: label.value,
                width: 10,
                height: 10
            })), /*#__PURE__*/ React.createElement(LegendLabel, null, label.text)));
        }));
    })), /*#__PURE__*/ React.createElement("svg", {
        height: height,
        width: width,
        style: width ? undefined : {
            width: "100%"
        },
        onPointerMove: function(e) {
            var _Math;
            // get mouse coordinates relative to top left of chart
            var _ref = [
                e.clientX - measuredLeft,
                e.clientY - measuredTop
            ], localX = _ref[0], localY = _ref[1];
            // get closest datapoint
            var dpDistances = data.map(function(dp) {
                return Math.hypot(xScale(getX(dp)) - localX, yScale(getY(dp)) - localY);
            });
            var minDistance = (_Math = Math).min.apply(_Math, _toConsumableArray(dpDistances));
            var minDistanceIdx = dpDistances.indexOf(minDistance);
            setClosestDp(data[minDistanceIdx]);
        },
        onPointerOut: function() {
            setClosestDp(undefined);
        },
        ref: ref
    }, showPoints && /*#__PURE__*/ React.createElement(Group, null, dataGroups ? Object.entries(dataGroups).map(function(param) {
        var _param = _slicedToArray(param, 2), dgName = _param[0], dg = _param[1];
        if (closestDpGroup !== undefined && closestDpGroup !== dgName) return;
        var _groupColorsMap_dgName;
        // color of the group
        var groupColor = rgbArrayToString((_groupColorsMap_dgName = groupColorsMap === null || groupColorsMap === void 0 ? void 0 : groupColorsMap[dgName]) !== null && _groupColorsMap_dgName !== void 0 ? _groupColorsMap_dgName : [
            0,
            0,
            0
        ]);
        // make points for this datagroup
        return dg.map(function(dp, datapointIndex) {
            return /*#__PURE__*/ React.createElement("circle", {
                key: datapointIndex,
                cx: xScale(getX(dp)),
                cy: yScale(getY(dp)),
                r: pointRadius,
                fill: groupColor,
                opacity: pointOpacity
            });
        });
    }) : data.map(function(dp, datapointIndex) {
        return /*#__PURE__*/ React.createElement("circle", {
            key: datapointIndex,
            cx: xScale(getX(dp)),
            cy: yScale(getY(dp)),
            r: pointRadius,
            fill: rgbArrayToString((_groupColorsArray_ = groupColorsArray[0]) !== null && _groupColorsArray_ !== void 0 ? _groupColorsArray_ : [
                0,
                0,
                0
            ]),
            opacity: pointOpacity
        });
    })), showEndpointLabels && dataGroups && getZ && /*#__PURE__*/ React.createElement(Group, null, Object.entries(dataGroups).map(function(param, i) {
        var _param = _slicedToArray(param, 2), dgName = _param[0], dg = _param[1];
        var lastDp = dg[dg.length - 1];
        if (lastDp === undefined) return;
        var pointX = xScale(getX(lastDp));
        var pointY = yScale(getY(lastDp));
        var groupName = getZ(lastDp);
        var opacity = closestDpGroup === undefined || closestDpGroup === groupName ? 1 : 0.4;
        var _groupColorsMap_dgName;
        return /*#__PURE__*/ React.createElement(Fragment, {
            key: i
        }, /*#__PURE__*/ React.createElement("circle", {
            cx: pointX,
            cy: pointY,
            r: 1.5,
            fill: rgbArrayToString((_groupColorsMap_dgName = groupColorsMap === null || groupColorsMap === void 0 ? void 0 : groupColorsMap[dgName]) !== null && _groupColorsMap_dgName !== void 0 ? _groupColorsMap_dgName : [
                0,
                0,
                0
            ]),
            opacity: opacity
        }), /*#__PURE__*/ React.createElement("text", {
            x: pointX + 3,
            y: pointY + 3,
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            opacity: opacity
        }, groupName));
    })), showLines && /*#__PURE__*/ React.createElement(Group, null, dataGroups ? Object.entries(dataGroups).map(function(param) {
        var _param = _slicedToArray(param, 2), dgName = _param[0], dg = _param[1];
        var _groupColorsMap_dgName;
        return /*#__PURE__*/ React.createElement(LinePath, {
            key: dgName,
            curve: curveLinear,
            data: dg,
            x: function(dp) {
                return xScale(getX(dp));
            },
            y: function(dp) {
                return yScale(getY(dp));
            },
            stroke: rgbArrayToString((_groupColorsMap_dgName = groupColorsMap === null || groupColorsMap === void 0 ? void 0 : groupColorsMap[dgName]) !== null && _groupColorsMap_dgName !== void 0 ? _groupColorsMap_dgName : [
                0,
                0,
                0
            ]),
            strokeWidth: lineWidth,
            strokeOpacity: closestDpGroup === undefined || closestDpGroup === dgName ? 1 : 0.15
        });
    }) : /*#__PURE__*/ React.createElement(LinePath, {
        curve: curveLinear,
        data: data,
        x: function(dp) {
            return xScale(getX(dp));
        },
        y: function(dp) {
            return yScale(getY(dp));
        },
        stroke: rgbArrayToString((_groupColorsArray_1 = groupColorsArray[0]) !== null && _groupColorsArray_1 !== void 0 ? _groupColorsArray_1 : [
            0,
            0,
            0
        ]),
        strokeWidth: lineWidth
    })), /*#__PURE__*/ React.createElement(Axis, {
        orientation: Orientation.bottom,
        top: xAxisLocation !== undefined ? yScale(xAxisLocation) : height - axisWidth - ((_margins_bottom1 = margins === null || margins === void 0 ? void 0 : margins.bottom) !== null && _margins_bottom1 !== void 0 ? _margins_bottom1 : DEFAULT_MARGINS.bottom),
        scale: xScale,
        stroke: axisColor,
        tickStroke: axisColor,
        label: xAxisLabel,
        labelProps: {
            y: 36,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "sans-serif"
        }
    }), /*#__PURE__*/ React.createElement(Axis, {
        orientation: Orientation.left,
        left: axisWidth + ((_margins_left2 = margins === null || margins === void 0 ? void 0 : margins.left) !== null && _margins_left2 !== void 0 ? _margins_left2 : DEFAULT_MARGINS.left),
        scale: yScale,
        stroke: axisColor,
        tickStroke: axisColor,
        label: yAxisLabel,
        labelProps: {
            y: -22,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "sans-serif"
        }
    }), function() {
        if (!closestDp) return;
        var dpX = xScale(getX(closestDp));
        var dpY = yScale(getY(closestDp));
        var tooltipTitle = closestDpGroup;
        var tooltipWidth = 120;
        var tooltipHeight = tooltipTitle ? 60 : 45;
        var tooltipX = dpX - tooltipWidth / 2;
        var tooltipY = dpY - tooltipHeight - 10;
        return /*#__PURE__*/ React.createElement(Group, null, /*#__PURE__*/ React.createElement("circle", {
            cx: dpX,
            cy: dpY,
            r: 2,
            fill: rgbArrayToString([
                0,
                0,
                0
            ])
        }), /*#__PURE__*/ React.createElement("rect", {
            x: tooltipX,
            y: tooltipY,
            width: tooltipWidth,
            height: tooltipHeight,
            fill: "#ffffff",
            fillOpacity: 0.85,
            stroke: "#000000",
            strokeOpacity: 0.9
        }), /*#__PURE__*/ React.createElement("text", {
            x: tooltipX + 10,
            y: tooltipY + 20,
            fontSize: 12,
            fontFamily: "sans-serif",
            fontWeight: "bold"
        }, tooltipTitle), /*#__PURE__*/ React.createElement("text", {
            x: tooltipX + 10,
            y: tooltipY + (tooltipTitle ? 35 : 20),
            fontSize: 12,
            fontFamily: "sans-serif"
        }, "x: ", formatNumber(getX(closestDp))), /*#__PURE__*/ React.createElement("text", {
            x: tooltipX + 10,
            y: tooltipY + (tooltipTitle ? 50 : 35),
            fontSize: 12,
            fontFamily: "sans-serif"
        }, "y: ", formatNumber(getY(closestDp))));
    }()));
    return chart;
};
export var render = function(props) {
    return function(target) {
        ReactDOM.createRoot(target).render(/*#__PURE__*/ React.createElement(Chart, props));
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWIvUmVhY3RMaW5lQ2hhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aXMsIE9yaWVudGF0aW9uIH0gZnJvbSBcIkB2aXN4L2F4aXNcIjtcbmltcG9ydCB7IExpbmVQYXRoIH0gZnJvbSBcIkB2aXN4L3NoYXBlXCI7XG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgc2NhbGVMb2csIHNjYWxlT3JkaW5hbCB9IGZyb20gXCJAdmlzeC9zY2FsZVwiO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiQHZpc3gvZ3JvdXBcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgY3VydmVMaW5lYXIgfSBmcm9tIFwiQHZpc3gvY3VydmVcIjtcbmltcG9ydCB7IExlZ2VuZE9yZGluYWwsIExlZ2VuZEl0ZW0sIExlZ2VuZExhYmVsIH0gZnJvbSBcIkB2aXN4L2xlZ2VuZFwiO1xuaW1wb3J0IHsgZ3JvdXBCeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvQXJyYXlzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VzZVdpbmRvd1NpemVcIjtcbmltcG9ydCB7IGV2ZW5seVNwYWNlZENvbG9ycywgcmdiQXJyYXlUb1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvQ29sb3JzXCI7XG5cbi8vIGltcG9ydCBcIi4vUmVhY3RMaW5lQ2hhcnQuY3NzXCI7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL051bWJlcnNcIjtcblxuaW50ZXJmYWNlIE1hcmdpbnMge1xuICB0b3A6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbn1cblxuY29uc3QgREVGQVVMVF9NQVJHSU5TOiBNYXJnaW5zID0geyBsZWZ0OiAxMCwgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDEwIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRQcm9wczxUPiB7XG4gIC8vIGRhdGFcbiAgZGF0YTogVFtdO1xuICBnZXRYOiAocDogVCkgPT4gbnVtYmVyO1xuICBnZXRZOiAocDogVCkgPT4gbnVtYmVyO1xuICBnZXRaPzogKHA6IFQpID0+IHN0cmluZztcbiAgeEF4aXNMYWJlbD86IHN0cmluZztcbiAgeUF4aXNMYWJlbD86IHN0cmluZztcbiAgLy8gZGlzcGxheVxuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIG1hcmdpbnM/OiBQYXJ0aWFsPE1hcmdpbnM+O1xuICBheGlzV2lkdGg/OiBudW1iZXI7XG4gIGF4aXNDb2xvcj86IHN0cmluZztcbiAgcG9pbnRSYWRpdXM/OiBudW1iZXI7XG4gIHBvaW50T3BhY2l0eT86IG51bWJlcjtcbiAgbGluZVdpZHRoPzogbnVtYmVyO1xuICBzaG93UG9pbnRzPzogYm9vbGVhbjtcbiAgc2hvd0xpbmVzPzogYm9vbGVhbjtcbiAgc2hvd0VuZHBvaW50TGFiZWxzPzogYm9vbGVhbjtcbiAgY2hhcnRUeXBlPzogXCJsaW5lYXJcIiB8IFwibG9nXCI7XG4gIHlEb21haW4/OiBbbnVtYmVyLCBudW1iZXJdO1xuICB4QXhpc0xvY2F0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhcnQgPSA8VCw+KHByb3BzOiBDaGFydFByb3BzPFQ+KSA9PiB7XG4gIC8vIGRlc3RydWN0dXJlIHByb3BzXG4gIGNvbnN0IHtcbiAgICAvLyBkYXRhXG4gICAgZGF0YSxcbiAgICBnZXRYLFxuICAgIGdldFksXG4gICAgZ2V0WixcbiAgICB4QXhpc0xhYmVsLFxuICAgIHlBeGlzTGFiZWwsXG4gICAgLy8gZGlzcGxheVxuICAgIGhlaWdodCxcbiAgICB3aWR0aCxcbiAgICBtYXJnaW5zLFxuICAgIGF4aXNXaWR0aCA9IDUwLFxuICAgIGF4aXNDb2xvciA9IFwiIzAwMDAwMFwiLFxuICAgIHBvaW50UmFkaXVzID0gMS4zLFxuICAgIHBvaW50T3BhY2l0eSA9IDEsXG4gICAgbGluZVdpZHRoID0gMSxcbiAgICBzaG93UG9pbnRzID0gZmFsc2UsXG4gICAgc2hvd0xpbmVzID0gdHJ1ZSxcbiAgICBzaG93RW5kcG9pbnRMYWJlbHMgPSBmYWxzZSxcbiAgICBjaGFydFR5cGUgPSBcImxpbmVhclwiLFxuICAgIHlEb21haW4sXG4gICAgeEF4aXNMb2NhdGlvbixcbiAgfSA9IHByb3BzO1xuXG4gIC8vIHdpbmRvdyBzaXplXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgLy8gZGltZW5zaW9uc1xuICBjb25zdCByZWYgPSB1c2VSZWY8U1ZHU1ZHRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFttZWFzdXJlZFdpZHRoLCBzZXRNZWFzdXJlZFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVhc3VyZWRUb3AsIHNldE1lYXN1cmVkVG9wXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWVhc3VyZWRMZWZ0LCBzZXRNZWFzdXJlZExlZnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gY2xvc2VzdCBkYXRhcG9pbnRcbiAgY29uc3QgW2Nsb3Nlc3REcCwgc2V0Q2xvc2VzdERwXSA9IHVzZVN0YXRlPFQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IGNsb3Nlc3REcEdyb3VwID0gY2xvc2VzdERwICYmIGdldFogPyBnZXRaKGNsb3Nlc3REcCkgOiB1bmRlZmluZWQ7XG5cbiAgLy8gZ2V0IGRpbWVuc2lvbnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFjdXJyZW50KSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHNldE1lYXN1cmVkVG9wKGJvdW5kaW5nUmVjdC50b3ApO1xuICAgIHNldE1lYXN1cmVkTGVmdChib3VuZGluZ1JlY3QubGVmdCk7XG4gICAgc2V0TWVhc3VyZWRXaWR0aChjdXJyZW50LmNsaWVudFdpZHRoKTtcbiAgfSwgW3dpbmRvd1NpemVdKTtcblxuICAvLyBncm91cCBkYXRhIGJ5IHpcbiAgY29uc3QgZGF0YUdyb3VwcyA9IGdldFogIT09IHVuZGVmaW5lZCA/IGdyb3VwQnkoZGF0YSwgZ2V0WikgOiB1bmRlZmluZWQ7XG5cbiAgLy8gZ2V0IGNvbG9yc1xuICBjb25zdCBncm91cENvbG9yc0FycmF5ID0gZXZlbmx5U3BhY2VkQ29sb3JzKFxuICAgIGRhdGFHcm91cHMgIT09IHVuZGVmaW5lZCA/IE9iamVjdC5rZXlzKGRhdGFHcm91cHMpLmxlbmd0aCA6IDEsXG4gICAgMSxcbiAgICAwLjc1XG4gICk7XG4gIGlmICghZ3JvdXBDb2xvcnNBcnJheSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgZ3JvdXBDb2xvcnNNYXAgPVxuICAgIGRhdGFHcm91cHMgIT09IHVuZGVmaW5lZFxuICAgICAgPyBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgT2JqZWN0LmtleXMoZGF0YUdyb3VwcykubWFwKChncm91cE5hbWUsIGkpID0+IFtcbiAgICAgICAgICAgIGdyb3VwTmFtZSxcbiAgICAgICAgICAgIGdyb3VwQ29sb3JzQXJyYXlbaV0hLFxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gIC8vIHggc2NhbGVcbiAgY29uc3QgeFZhbHVlcyA9IGRhdGEubWFwKGdldFgpO1xuICBjb25zdCB4U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gICAgZG9tYWluOiBbTWF0aC5taW4oLi4ueFZhbHVlcyksIE1hdGgubWF4KC4uLnhWYWx1ZXMpXSxcbiAgICByYW5nZTogW1xuICAgICAgKG1hcmdpbnM/LmxlZnQgPz8gREVGQVVMVF9NQVJHSU5TLmxlZnQpICsgYXhpc1dpZHRoLFxuICAgICAgbWVhc3VyZWRXaWR0aCAtIChtYXJnaW5zPy5yaWdodCA/PyBERUZBVUxUX01BUkdJTlMucmlnaHQpLFxuICAgIF0sXG4gIH0pO1xuXG4gIC8vIHkgc2NhbGUgdHlwZVxuICBjb25zdCB5U2NhbGVUeXBlID0gKCgpID0+IHtcbiAgICBzd2l0Y2ggKGNoYXJ0VHlwZSkge1xuICAgICAgY2FzZSBcImxpbmVhclwiOlxuICAgICAgICByZXR1cm4gc2NhbGVMaW5lYXI7XG4gICAgICBjYXNlIFwibG9nXCI6XG4gICAgICAgIHJldHVybiBzY2FsZUxvZztcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8geSBzY2FsZSBkb21haW5cbiAgY29uc3QgeVNjYWxlRG9tYWluID0gKCgpID0+IHtcbiAgICBjb25zdCB5VmFsdWVzID0gZGF0YS5tYXAoZ2V0WSk7XG5cbiAgICBpZiAoeURvbWFpbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4geURvbWFpbjtcblxuICAgIHN3aXRjaCAoY2hhcnRUeXBlKSB7XG4gICAgICBjYXNlIFwibGluZWFyXCI6XG4gICAgICAgIHJldHVybiBbTWF0aC5taW4oLi4ueVZhbHVlcyksIE1hdGgubWF4KC4uLnlWYWx1ZXMpXTtcbiAgICAgIGNhc2UgXCJsb2dcIjpcbiAgICAgICAgcmV0dXJuIFsxLCBNYXRoLm1heCguLi55VmFsdWVzKV07XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vIHkgc2NhbGVcbiAgY29uc3QgeVNjYWxlID0geVNjYWxlVHlwZSh7XG4gICAgZG9tYWluOiB5U2NhbGVEb21haW4sXG4gICAgcmFuZ2U6IFtcbiAgICAgIGhlaWdodCAtIGF4aXNXaWR0aCAtIChtYXJnaW5zPy5ib3R0b20gPz8gREVGQVVMVF9NQVJHSU5TLmJvdHRvbSksXG4gICAgICBtYXJnaW5zPy50b3AgPz8gREVGQVVMVF9NQVJHSU5TLnRvcCxcbiAgICBdLFxuICB9KTtcblxuICAvLyBsZWdlbmQgc2NhbGVcbiAgY29uc3QgbGVnZW5kU2NhbGUgPSAoKCkgPT4ge1xuICAgIGlmIChkYXRhR3JvdXBzID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBzb3J0ZWRHcm91cHMgPSBPYmplY3QuZW50cmllcyhkYXRhR3JvdXBzKS5zb3J0KChncm91cEEsIGdyb3VwQikgPT4ge1xuICAgICAgY29uc3QgW19ncm91cEFOYW1lLCBncm91cEFEYXRhXSA9IGdyb3VwQTtcbiAgICAgIGNvbnN0IFtfZ3JvdXBCTmFtZSwgZ3JvdXBCRGF0YV0gPSBncm91cEI7XG5cbiAgICAgIGNvbnN0IGxhc3RBRHAgPSBncm91cEFEYXRhW2dyb3VwQURhdGEubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBsYXN0QkRwID0gZ3JvdXBCRGF0YVtncm91cEJEYXRhLmxlbmd0aCAtIDFdO1xuXG4gICAgICBjb25zdCBmaW5hbEFWYWx1ZSA9IGxhc3RBRHAgPyBnZXRZKGxhc3RBRHApIDogdW5kZWZpbmVkO1xuICAgICAgY29uc3QgZmluYWxCVmFsdWUgPSBsYXN0QkRwID8gZ2V0WShsYXN0QkRwKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKGZpbmFsQVZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAtMTtcbiAgICAgIGlmIChmaW5hbEJWYWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAtMSAqIChmaW5hbEFWYWx1ZSAtIGZpbmFsQlZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzY2FsZU9yZGluYWwoe1xuICAgICAgZG9tYWluOiBzb3J0ZWRHcm91cHMubWFwKChbZ3JvdXBOYW1lXSkgPT4gZ3JvdXBOYW1lKSxcbiAgICAgIHJhbmdlOiBzb3J0ZWRHcm91cHMubWFwKChbZ3JvdXBOYW1lXSkgPT5cbiAgICAgICAgcmdiQXJyYXlUb1N0cmluZyhncm91cENvbG9yc01hcD8uW2dyb3VwTmFtZV0gPz8gWzAsIDAsIDBdKVxuICAgICAgKSxcbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyBjaGFydFxuICBjb25zdCBjaGFydCA9IChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiIH19XG4gICAgPlxuICAgICAgey8qIGxlZ2VuZCAqL31cbiAgICAgIHtsZWdlbmRTY2FsZSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogbWFyZ2lucz8udG9wID8/IERFRkFVTFRfTUFSR0lOUy50b3AsXG4gICAgICAgICAgICBsZWZ0OiAobWFyZ2lucz8ubGVmdCA/PyBERUZBVUxUX01BUkdJTlMubGVmdCkgKyBheGlzV2lkdGgsXG4gICAgICAgICAgICBtYXJnaW46IFwiMCAyMHB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAgMTBweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGVnZW5kT3JkaW5hbCBzY2FsZT17bGVnZW5kU2NhbGV9PlxuICAgICAgICAgICAgeyhsYWJlbHMpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICBnYXA6IDEwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxMZWdlbmRJdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogNSxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17MTB9IGhlaWdodD17MTB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD17bGFiZWwudmFsdWV9IHdpZHRoPXsxMH0gaGVpZ2h0PXsxMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGVnZW5kTGFiZWw+e2xhYmVsLnRleHR9PC9MZWdlbmRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0xlZ2VuZEl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xlZ2VuZE9yZGluYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIGNoYXJ0ICovfVxuICAgICAgPHN2Z1xuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBzdHlsZT17d2lkdGggPyB1bmRlZmluZWQgOiB7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICBvblBvaW50ZXJNb3ZlPXsoZSkgPT4ge1xuICAgICAgICAgIC8vIGdldCBtb3VzZSBjb29yZGluYXRlcyByZWxhdGl2ZSB0byB0b3AgbGVmdCBvZiBjaGFydFxuICAgICAgICAgIGNvbnN0IFtsb2NhbFgsIGxvY2FsWV0gPSBbXG4gICAgICAgICAgICBlLmNsaWVudFggLSBtZWFzdXJlZExlZnQsXG4gICAgICAgICAgICBlLmNsaWVudFkgLSBtZWFzdXJlZFRvcCxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgLy8gZ2V0IGNsb3Nlc3QgZGF0YXBvaW50XG4gICAgICAgICAgY29uc3QgZHBEaXN0YW5jZXMgPSBkYXRhLm1hcCgoZHApID0+XG4gICAgICAgICAgICBNYXRoLmh5cG90KHhTY2FsZShnZXRYKGRwKSkhIC0gbG9jYWxYLCB5U2NhbGUoZ2V0WShkcCkpISAtIGxvY2FsWSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IG1pbkRpc3RhbmNlID0gTWF0aC5taW4oLi4uZHBEaXN0YW5jZXMpO1xuICAgICAgICAgIGNvbnN0IG1pbkRpc3RhbmNlSWR4ID0gZHBEaXN0YW5jZXMuaW5kZXhPZihtaW5EaXN0YW5jZSk7XG5cbiAgICAgICAgICBzZXRDbG9zZXN0RHAoZGF0YVttaW5EaXN0YW5jZUlkeF0pO1xuICAgICAgICB9fVxuICAgICAgICBvblBvaW50ZXJPdXQ9eygpID0+IHtcbiAgICAgICAgICBzZXRDbG9zZXN0RHAodW5kZWZpbmVkKTtcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICA+XG4gICAgICAgIHsvKiBkYXRhICovfVxuICAgICAgICB7c2hvd1BvaW50cyAmJiAoXG4gICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgey8qIHBvaW50cyAqL31cbiAgICAgICAgICAgIHtkYXRhR3JvdXBzXG4gICAgICAgICAgICAgID8gT2JqZWN0LmVudHJpZXMoZGF0YUdyb3VwcykubWFwKChbZGdOYW1lLCBkZ10pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0RHBHcm91cCAhPT0gdW5kZWZpbmVkICYmIGNsb3Nlc3REcEdyb3VwICE9PSBkZ05hbWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgLy8gY29sb3Igb2YgdGhlIGdyb3VwXG4gICAgICAgICAgICAgICAgICBjb25zdCBncm91cENvbG9yID0gcmdiQXJyYXlUb1N0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb2xvcnNNYXA/LltkZ05hbWVdID8/IFswLCAwLCAwXVxuICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgLy8gbWFrZSBwb2ludHMgZm9yIHRoaXMgZGF0YWdyb3VwXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGcubWFwKChkcCwgZGF0YXBvaW50SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YXBvaW50SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY3g9e3hTY2FsZShnZXRYKGRwKSl9XG4gICAgICAgICAgICAgICAgICAgICAgY3k9e3lTY2FsZShnZXRZKGRwKSl9XG4gICAgICAgICAgICAgICAgICAgICAgcj17cG9pbnRSYWRpdXN9XG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD17Z3JvdXBDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PXtwb2ludE9wYWNpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IGRhdGEubWFwKChkcCwgZGF0YXBvaW50SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhcG9pbnRJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY3g9e3hTY2FsZShnZXRYKGRwKSl9XG4gICAgICAgICAgICAgICAgICAgIGN5PXt5U2NhbGUoZ2V0WShkcCkpfVxuICAgICAgICAgICAgICAgICAgICByPXtwb2ludFJhZGl1c31cbiAgICAgICAgICAgICAgICAgICAgZmlsbD17cmdiQXJyYXlUb1N0cmluZyhncm91cENvbG9yc0FycmF5WzBdID8/IFswLCAwLCAwXSl9XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9e3BvaW50T3BhY2l0eX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogZW5kcG9pbnQgbGFiZWxzICovfVxuICAgICAgICB7c2hvd0VuZHBvaW50TGFiZWxzICYmIGRhdGFHcm91cHMgJiYgZ2V0WiAmJiAoXG4gICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGRhdGFHcm91cHMpLm1hcCgoW2RnTmFtZSwgZGddLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3REcCA9IGRnW2RnLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICBpZiAobGFzdERwID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgICAgICAgICBjb25zdCBwb2ludFggPSB4U2NhbGUoZ2V0WChsYXN0RHApKTtcbiAgICAgICAgICAgICAgY29uc3QgcG9pbnRZID0geVNjYWxlKGdldFkobGFzdERwKSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZ2V0WihsYXN0RHApO1xuICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5ID1cbiAgICAgICAgICAgICAgICBjbG9zZXN0RHBHcm91cCA9PT0gdW5kZWZpbmVkIHx8IGNsb3Nlc3REcEdyb3VwID09PSBncm91cE5hbWVcbiAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgOiAwLjQ7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIHsvKiBwb2ludCAqL31cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY3g9e3BvaW50WH1cbiAgICAgICAgICAgICAgICAgICAgY3k9e3BvaW50WX1cbiAgICAgICAgICAgICAgICAgICAgcj17MS41fVxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtyZ2JBcnJheVRvU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgIGdyb3VwQ29sb3JzTWFwPy5bZGdOYW1lXSA/PyBbMCwgMCwgMF1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17b3BhY2l0eX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7LyogZ3JvdXAgKi99XG4gICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICB4PXtwb2ludFggKyAzfVxuICAgICAgICAgICAgICAgICAgICB5PXtwb2ludFkgKyAzfVxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MTF9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PXtvcGFjaXR5fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXBOYW1lfVxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBsaW5lcyAqL31cbiAgICAgICAge3Nob3dMaW5lcyAmJiAoXG4gICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAge2RhdGFHcm91cHMgPyAoXG4gICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGFHcm91cHMpLm1hcCgoW2RnTmFtZSwgZGddKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5lUGF0aDxUPlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2RnTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY3VydmU9e2N1cnZlTGluZWFyfVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkZ31cbiAgICAgICAgICAgICAgICAgICAgeD17KGRwKSA9PiB4U2NhbGUoZ2V0WChkcCkpfVxuICAgICAgICAgICAgICAgICAgICB5PXsoZHApID0+IHlTY2FsZShnZXRZKGRwKSl9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT17cmdiQXJyYXlUb1N0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgICBncm91cENvbG9yc01hcD8uW2RnTmFtZV0gPz8gWzAsIDAsIDBdXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtsaW5lV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9e1xuICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REcEdyb3VwID09PSB1bmRlZmluZWQgfHwgY2xvc2VzdERwR3JvdXAgPT09IGRnTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDAuMTVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmVQYXRoPFQ+XG4gICAgICAgICAgICAgICAgY3VydmU9e2N1cnZlTGluZWFyfVxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgeD17KGRwKSA9PiB4U2NhbGUoZ2V0WChkcCkpfVxuICAgICAgICAgICAgICAgIHk9eyhkcCkgPT4geVNjYWxlKGdldFkoZHApKX1cbiAgICAgICAgICAgICAgICBzdHJva2U9e3JnYkFycmF5VG9TdHJpbmcoZ3JvdXBDb2xvcnNBcnJheVswXSA/PyBbMCwgMCwgMF0pfVxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtsaW5lV2lkdGh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIHggYXhpcyAqL31cbiAgICAgICAgPEF4aXNcbiAgICAgICAgICBvcmllbnRhdGlvbj17T3JpZW50YXRpb24uYm90dG9tfVxuICAgICAgICAgIHRvcD17XG4gICAgICAgICAgICB4QXhpc0xvY2F0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyB5U2NhbGUoeEF4aXNMb2NhdGlvbilcbiAgICAgICAgICAgICAgOiBoZWlnaHQgLSBheGlzV2lkdGggLSAobWFyZ2lucz8uYm90dG9tID8/IERFRkFVTFRfTUFSR0lOUy5ib3R0b20pXG4gICAgICAgICAgfVxuICAgICAgICAgIHNjYWxlPXt4U2NhbGV9XG4gICAgICAgICAgc3Ryb2tlPXtheGlzQ29sb3J9XG4gICAgICAgICAgdGlja1N0cm9rZT17YXhpc0NvbG9yfVxuICAgICAgICAgIGxhYmVsPXt4QXhpc0xhYmVsfVxuICAgICAgICAgIGxhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgIHk6IDM2LFxuICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiB5IGF4aXMgKi99XG4gICAgICAgIDxBeGlzXG4gICAgICAgICAgb3JpZW50YXRpb249e09yaWVudGF0aW9uLmxlZnR9XG4gICAgICAgICAgbGVmdD17YXhpc1dpZHRoICsgKG1hcmdpbnM/LmxlZnQgPz8gREVGQVVMVF9NQVJHSU5TLmxlZnQpfVxuICAgICAgICAgIHNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgc3Ryb2tlPXtheGlzQ29sb3J9XG4gICAgICAgICAgdGlja1N0cm9rZT17YXhpc0NvbG9yfVxuICAgICAgICAgIGxhYmVsPXt5QXhpc0xhYmVsfVxuICAgICAgICAgIGxhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgIHk6IC0yMixcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogdG9vbHRpcCAqL31cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgaWYgKCFjbG9zZXN0RHApIHJldHVybjtcblxuICAgICAgICAgIGNvbnN0IGRwWCA9IHhTY2FsZShnZXRYKGNsb3Nlc3REcCkpO1xuICAgICAgICAgIGNvbnN0IGRwWSA9IHlTY2FsZShnZXRZKGNsb3Nlc3REcCkpO1xuXG4gICAgICAgICAgY29uc3QgdG9vbHRpcFRpdGxlID0gY2xvc2VzdERwR3JvdXA7XG4gICAgICAgICAgY29uc3QgdG9vbHRpcFdpZHRoID0gMTIwO1xuICAgICAgICAgIGNvbnN0IHRvb2x0aXBIZWlnaHQgPSB0b29sdGlwVGl0bGUgPyA2MCA6IDQ1O1xuICAgICAgICAgIGNvbnN0IHRvb2x0aXBYID0gZHBYIC0gdG9vbHRpcFdpZHRoIC8gMjtcbiAgICAgICAgICBjb25zdCB0b29sdGlwWSA9IGRwWSAtIHRvb2x0aXBIZWlnaHQgLSAxMDtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgIHsvKiBwb2ludCBjb3JyZXNwb25kaW5nIHRvIHRvb2x0aXAgKi99XG4gICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICBjeD17ZHBYfVxuICAgICAgICAgICAgICAgIGN5PXtkcFl9XG4gICAgICAgICAgICAgICAgcj17Mn1cbiAgICAgICAgICAgICAgICBmaWxsPXtyZ2JBcnJheVRvU3RyaW5nKFswLCAwLCAwXSl9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgey8qIHRvb2x0aXAgYm94ICovfVxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIHg9e3Rvb2x0aXBYfVxuICAgICAgICAgICAgICAgIHk9e3Rvb2x0aXBZfVxuICAgICAgICAgICAgICAgIHdpZHRoPXt0b29sdGlwV2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXt0b29sdGlwSGVpZ2h0fVxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT17MC44NX1cbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiB0b29sdGlwIHRpdGxlICovfVxuICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgIHg9e3Rvb2x0aXBYICsgMTB9XG4gICAgICAgICAgICAgICAgeT17dG9vbHRpcFkgKyAyMH1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17MTJ9XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0b29sdGlwVGl0bGV9XG4gICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgey8qIHRvb2x0aXAgYm9keSB0ZXh0ICovfVxuICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgIHg9e3Rvb2x0aXBYICsgMTB9XG4gICAgICAgICAgICAgICAgeT17dG9vbHRpcFkgKyAodG9vbHRpcFRpdGxlID8gMzUgOiAyMCl9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9ezEyfVxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHg6IHtmb3JtYXROdW1iZXIoZ2V0WChjbG9zZXN0RHApKX1cbiAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgIHg9e3Rvb2x0aXBYICsgMTB9XG4gICAgICAgICAgICAgICAgeT17dG9vbHRpcFkgKyAodG9vbHRpcFRpdGxlID8gNTAgOiAzNSl9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9ezEyfVxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHk6IHtmb3JtYXROdW1iZXIoZ2V0WShjbG9zZXN0RHApKX1cbiAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KSgpfVxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIGNoYXJ0O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlciA9XG4gIDxULD4ocHJvcHM6IENoYXJ0UHJvcHM8VD4pID0+XG4gICh0YXJnZXQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgUmVhY3RET00uY3JlYXRlUm9vdCh0YXJnZXQpLnJlbmRlcig8Q2hhcnQgey4uLnByb3BzfSAvPik7XG4gIH07XG4iXSwibmFtZXMiOlsiQXhpcyIsIk9yaWVudGF0aW9uIiwiTGluZVBhdGgiLCJzY2FsZUxpbmVhciIsInNjYWxlTG9nIiwic2NhbGVPcmRpbmFsIiwiR3JvdXAiLCJSZWFjdERPTSIsImN1cnZlTGluZWFyIiwiTGVnZW5kT3JkaW5hbCIsIkxlZ2VuZEl0ZW0iLCJMZWdlbmRMYWJlbCIsImdyb3VwQnkiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlV2luZG93U2l6ZSIsImV2ZW5seVNwYWNlZENvbG9ycyIsInJnYkFycmF5VG9TdHJpbmciLCJmb3JtYXROdW1iZXIiLCJERUZBVUxUX01BUkdJTlMiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJDaGFydCIsInByb3BzIiwiTWF0aCIsImRhdGEiLCJnZXRYIiwiZ2V0WSIsImdldFoiLCJ4QXhpc0xhYmVsIiwieUF4aXNMYWJlbCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2lucyIsImF4aXNXaWR0aCIsImF4aXNDb2xvciIsInBvaW50UmFkaXVzIiwicG9pbnRPcGFjaXR5IiwibGluZVdpZHRoIiwic2hvd1BvaW50cyIsInNob3dMaW5lcyIsInNob3dFbmRwb2ludExhYmVscyIsImNoYXJ0VHlwZSIsInlEb21haW4iLCJ4QXhpc0xvY2F0aW9uIiwid2luZG93U2l6ZSIsInJlZiIsIm1lYXN1cmVkV2lkdGgiLCJzZXRNZWFzdXJlZFdpZHRoIiwibWVhc3VyZWRUb3AiLCJzZXRNZWFzdXJlZFRvcCIsIm1lYXN1cmVkTGVmdCIsInNldE1lYXN1cmVkTGVmdCIsInVuZGVmaW5lZCIsImNsb3Nlc3REcCIsInNldENsb3Nlc3REcCIsImNsb3Nlc3REcEdyb3VwIiwiY3VycmVudCIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFdpZHRoIiwiZGF0YUdyb3VwcyIsImdyb3VwQ29sb3JzQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZ3JvdXBDb2xvcnNNYXAiLCJmcm9tRW50cmllcyIsIm1hcCIsImdyb3VwTmFtZSIsImkiLCJ4VmFsdWVzIiwieFNjYWxlIiwiZG9tYWluIiwibWluIiwibWF4IiwicmFuZ2UiLCJ5U2NhbGVUeXBlIiwieVNjYWxlRG9tYWluIiwieVZhbHVlcyIsInlTY2FsZSIsImxlZ2VuZFNjYWxlIiwic29ydGVkR3JvdXBzIiwiZW50cmllcyIsInNvcnQiLCJncm91cEEiLCJncm91cEIiLCJfZ3JvdXBBTmFtZSIsImdyb3VwQURhdGEiLCJfZ3JvdXBCTmFtZSIsImdyb3VwQkRhdGEiLCJsYXN0QURwIiwibGFzdEJEcCIsImZpbmFsQVZhbHVlIiwiZmluYWxCVmFsdWUiLCJjaGFydCIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwic2NhbGUiLCJsYWJlbHMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsImxhYmVsIiwia2V5IiwiYWxpZ25JdGVtcyIsInN2ZyIsInJlY3QiLCJmaWxsIiwidmFsdWUiLCJ0ZXh0Iiwib25Qb2ludGVyTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImxvY2FsWCIsImxvY2FsWSIsImRwRGlzdGFuY2VzIiwiZHAiLCJoeXBvdCIsIm1pbkRpc3RhbmNlIiwibWluRGlzdGFuY2VJZHgiLCJpbmRleE9mIiwib25Qb2ludGVyT3V0IiwiZGdOYW1lIiwiZGciLCJncm91cENvbG9yIiwiZGF0YXBvaW50SW5kZXgiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsIm9wYWNpdHkiLCJsYXN0RHAiLCJwb2ludFgiLCJwb2ludFkiLCJ4IiwieSIsImZvbnRXZWlnaHQiLCJjdXJ2ZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlT3BhY2l0eSIsIm9yaWVudGF0aW9uIiwidGlja1N0cm9rZSIsImxhYmVsUHJvcHMiLCJkcFgiLCJkcFkiLCJ0b29sdGlwVGl0bGUiLCJ0b29sdGlwV2lkdGgiLCJ0b29sdGlwSGVpZ2h0IiwidG9vbHRpcFgiLCJ0b29sdGlwWSIsImZpbGxPcGFjaXR5IiwicmVuZGVyIiwidGFyZ2V0IiwiY3JlYXRlUm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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