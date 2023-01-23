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

import "./ReactLineChart.css";
import { formatNumber } from "../utilities/Numbers";

interface Margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const DEFAULT_MARGINS: Margins = { left: 10, top: 50, right: 50, bottom: 10 };

export interface ChartProps<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ?: (p: T) => string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  // display
  height: number;
  width?: number;
  margins?: Partial<Margins>;
  axisWidth?: number;
  axisColor?: string;
  pointRadius?: number;
  pointOpacity?: number;
  lineWidth?: number;
  showPoints?: boolean;
  showLines?: boolean;
  showEndpointLabels?: boolean;
  chartType?: "linear" | "log";
  yDomain?: [number, number];
  xAxisLocation?: number;
}

export const Chart = <T,>(props: ChartProps<T>) => {
  // destructure props
  const {
    // data
    data,
    getX,
    getY,
    getZ,
    xAxisLabel,
    yAxisLabel,
    // display
    height,
    width,
    margins,
    axisWidth = 50,
    axisColor = "#000000",
    pointRadius = 1.3,
    pointOpacity = 1,
    lineWidth = 1,
    showPoints = false,
    showLines = true,
    showEndpointLabels = false,
    chartType = "linear",
    yDomain,
    xAxisLocation,
  } = props;

  // window size
  const windowSize = useWindowSize();

  // dimensions
  const ref = useRef<SVGSVGElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState(0);
  const [measuredTop, setMeasuredTop] = useState(0);
  const [measuredLeft, setMeasuredLeft] = useState(0);

  // closest datapoint
  const [closestDp, setClosestDp] = useState<T | undefined>(undefined);
  const closestDpGroup = closestDp && getZ ? getZ(closestDp) : undefined;

  // get dimensions
  useEffect(() => {
    const current = ref.current;
    if (!current) return undefined;

    const boundingRect = current.getBoundingClientRect();

    setMeasuredTop(boundingRect.top);
    setMeasuredLeft(boundingRect.left);
    setMeasuredWidth(current.clientWidth);
  }, [windowSize]);

  // group data by z
  const dataGroups = getZ !== undefined ? groupBy(data, getZ) : undefined;

  // get colors
  const groupColorsArray = evenlySpacedColors(
    dataGroups !== undefined ? Object.keys(dataGroups).length : 1,
    1,
    0.75
  );
  if (!groupColorsArray) return null;

  const groupColorsMap =
    dataGroups !== undefined
      ? Object.fromEntries(
          Object.keys(dataGroups).map((groupName, i) => [
            groupName,
            groupColorsArray[i]!,
          ])
        )
      : undefined;

  // x scale
  const xValues = data.map(getX);
  const xScale = scaleLinear({
    domain: [Math.min(...xValues), Math.max(...xValues)],
    range: [
      (margins?.left ?? DEFAULT_MARGINS.left) + axisWidth,
      measuredWidth - (margins?.right ?? DEFAULT_MARGINS.right),
    ],
  });

  // y scale type
  const yScaleType = (() => {
    switch (chartType) {
      case "linear":
        return scaleLinear;
      case "log":
        return scaleLog;
    }
  })();

  // y scale domain
  const yScaleDomain = (() => {
    const yValues = data.map(getY);

    if (yDomain !== undefined) return yDomain;

    switch (chartType) {
      case "linear":
        return [Math.min(...yValues), Math.max(...yValues)];
      case "log":
        return [1, Math.max(...yValues)];
    }
  })();

  // y scale
  const yScale = yScaleType({
    domain: yScaleDomain,
    range: [
      height - axisWidth - (margins?.bottom ?? DEFAULT_MARGINS.bottom),
      margins?.top ?? DEFAULT_MARGINS.top,
    ],
  });

  // legend scale
  const legendScale = (() => {
    if (dataGroups === undefined) return undefined;

    const sortedGroups = Object.entries(dataGroups).sort((groupA, groupB) => {
      const [_groupAName, groupAData] = groupA;
      const [_groupBName, groupBData] = groupB;

      const lastADp = groupAData[groupAData.length - 1];
      const lastBDp = groupBData[groupBData.length - 1];

      const finalAValue = lastADp ? getY(lastADp) : undefined;
      const finalBValue = lastBDp ? getY(lastBDp) : undefined;

      if (finalAValue === undefined) return -1;
      if (finalBValue === undefined) return 1;
      return -1 * (finalAValue - finalBValue);
    });

    return scaleOrdinal({
      domain: sortedGroups.map(([groupName]) => groupName),
      range: sortedGroups.map(([groupName]) =>
        rgbArrayToString(groupColorsMap?.[groupName] ?? [0, 0, 0])
      ),
    });
  })();

  // chart
  const chart = (
    <div
      style={{ position: "relative", fontSize: 12, fontFamily: "sans-serif" }}
    >
      {/* legend */}
      {legendScale && (
        <div
          style={{
            position: "absolute",
            top: margins?.top ?? DEFAULT_MARGINS.top,
            left: (margins?.left ?? DEFAULT_MARGINS.left) + axisWidth,
            margin: "0 20px",
            padding: "0 10px",
            border: "1px solid black",
            borderRadius: 4,
          }}
        >
          <LegendOrdinal scale={legendScale}>
            {(labels) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {labels.map((label, i) => (
                  <LegendItem key={i}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <svg width={10} height={10}>
                        <rect fill={label.value} width={10} height={10} />
                      </svg>
                      <LegendLabel>{label.text}</LegendLabel>
                    </div>
                  </LegendItem>
                ))}
              </div>
            )}
          </LegendOrdinal>
        </div>
      )}

      {/* chart */}
      <svg
        height={height}
        width={width}
        style={width ? undefined : { width: "100%" }}
        onPointerMove={(e) => {
          // get mouse coordinates relative to top left of chart
          const [localX, localY] = [
            e.clientX - measuredLeft,
            e.clientY - measuredTop,
          ];

          // get closest datapoint
          const dpDistances = data.map((dp) =>
            Math.hypot(xScale(getX(dp))! - localX, yScale(getY(dp))! - localY)
          );
          const minDistance = Math.min(...dpDistances);
          const minDistanceIdx = dpDistances.indexOf(minDistance);

          setClosestDp(data[minDistanceIdx]);
        }}
        onPointerOut={() => {
          setClosestDp(undefined);
        }}
        ref={ref}
      >
        {/* data */}
        {showPoints && (
          <Group>
            {/* points */}
            {dataGroups
              ? Object.entries(dataGroups).map(([dgName, dg]) => {
                  if (closestDpGroup !== undefined && closestDpGroup !== dgName)
                    return;

                  // color of the group
                  const groupColor = rgbArrayToString(
                    groupColorsMap?.[dgName] ?? [0, 0, 0]
                  );

                  // make points for this datagroup
                  return dg.map((dp, datapointIndex) => (
                    <circle
                      key={datapointIndex}
                      cx={xScale(getX(dp))}
                      cy={yScale(getY(dp))}
                      r={pointRadius}
                      fill={groupColor}
                      opacity={pointOpacity}
                    />
                  ));
                })
              : data.map((dp, datapointIndex) => (
                  <circle
                    key={datapointIndex}
                    cx={xScale(getX(dp))}
                    cy={yScale(getY(dp))}
                    r={pointRadius}
                    fill={rgbArrayToString(groupColorsArray[0] ?? [0, 0, 0])}
                    opacity={pointOpacity}
                  />
                ))}
          </Group>
        )}

        {/* endpoint labels */}
        {showEndpointLabels && dataGroups && getZ && (
          <Group>
            {Object.entries(dataGroups).map(([dgName, dg], i) => {
              const lastDp = dg[dg.length - 1];
              if (lastDp === undefined) return;

              const pointX = xScale(getX(lastDp));
              const pointY = yScale(getY(lastDp));

              const groupName = getZ(lastDp);
              const opacity =
                closestDpGroup === undefined || closestDpGroup === groupName
                  ? 1
                  : 0.4;

              return (
                <Fragment key={i}>
                  {/* point */}
                  <circle
                    cx={pointX}
                    cy={pointY}
                    r={1.5}
                    fill={rgbArrayToString(
                      groupColorsMap?.[dgName] ?? [0, 0, 0]
                    )}
                    opacity={opacity}
                  />
                  {/* group */}
                  <text
                    x={pointX + 3}
                    y={pointY + 3}
                    fontSize={11}
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    opacity={opacity}
                  >
                    {groupName}
                  </text>
                </Fragment>
              );
            })}
          </Group>
        )}

        {/* lines */}
        {showLines && (
          <Group>
            {dataGroups ? (
              Object.entries(dataGroups).map(([dgName, dg]) => {
                return (
                  <LinePath<T>
                    key={dgName}
                    curve={curveLinear}
                    data={dg}
                    x={(dp) => xScale(getX(dp))}
                    y={(dp) => yScale(getY(dp))}
                    stroke={rgbArrayToString(
                      groupColorsMap?.[dgName] ?? [0, 0, 0]
                    )}
                    strokeWidth={lineWidth}
                    strokeOpacity={
                      closestDpGroup === undefined || closestDpGroup === dgName
                        ? 1
                        : 0.15
                    }
                  />
                );
              })
            ) : (
              <LinePath<T>
                curve={curveLinear}
                data={data}
                x={(dp) => xScale(getX(dp))}
                y={(dp) => yScale(getY(dp))}
                stroke={rgbArrayToString(groupColorsArray[0] ?? [0, 0, 0])}
                strokeWidth={lineWidth}
              />
            )}
          </Group>
        )}

        {/* x axis */}
        <Axis
          orientation={Orientation.bottom}
          top={
            xAxisLocation !== undefined
              ? yScale(xAxisLocation)
              : height - axisWidth - (margins?.bottom ?? DEFAULT_MARGINS.bottom)
          }
          scale={xScale}
          stroke={axisColor}
          tickStroke={axisColor}
          label={xAxisLabel}
          labelProps={{
            y: 36,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        />

        {/* y axis */}
        <Axis
          orientation={Orientation.left}
          left={axisWidth + (margins?.left ?? DEFAULT_MARGINS.left)}
          scale={yScale}
          stroke={axisColor}
          tickStroke={axisColor}
          label={yAxisLabel}
          labelProps={{
            y: -22,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        />

        {/* tooltip */}
        {(() => {
          if (!closestDp) return;

          const dpX = xScale(getX(closestDp));
          const dpY = yScale(getY(closestDp));

          const tooltipTitle = closestDpGroup;
          const tooltipWidth = 120;
          const tooltipHeight = tooltipTitle ? 60 : 45;
          const tooltipX = dpX - tooltipWidth / 2;
          const tooltipY = dpY - tooltipHeight - 10;

          return (
            <Group>
              {/* point corresponding to tooltip */}
              <circle
                cx={dpX}
                cy={dpY}
                r={2}
                fill={rgbArrayToString([0, 0, 0])}
              />

              {/* tooltip box */}
              <rect
                x={tooltipX}
                y={tooltipY}
                width={tooltipWidth}
                height={tooltipHeight}
                fill="#ffffff"
                fillOpacity={0.85}
                stroke="#000000"
                strokeOpacity={0.9}
              />
              {/* tooltip title */}
              <text
                x={tooltipX + 10}
                y={tooltipY + 20}
                fontSize={12}
                fontFamily="sans-serif"
                fontWeight="bold"
              >
                {tooltipTitle}
              </text>
              {/* tooltip body text */}
              <text
                x={tooltipX + 10}
                y={tooltipY + (tooltipTitle ? 35 : 20)}
                fontSize={12}
                fontFamily="sans-serif"
              >
                x: {formatNumber(getX(closestDp))}
              </text>
              <text
                x={tooltipX + 10}
                y={tooltipY + (tooltipTitle ? 50 : 35)}
                fontSize={12}
                fontFamily="sans-serif"
              >
                y: {formatNumber(getY(closestDp))}
              </text>
            </Group>
          );
        })()}
      </svg>
    </div>
  );

  return chart;
};

export const render =
  <T,>(props: ChartProps<T>) =>
  (target: HTMLElement) => {
    ReactDOM.createRoot(target).render(<Chart {...props} />);
  };
