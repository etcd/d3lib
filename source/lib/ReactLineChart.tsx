// import { Group } from "@visx/group";
import { Axis, Orientation } from "@visx/axis";
import { Bar, LinePath } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { useMeasure } from "react-use";
import { Group } from "@visx/group";
import { curveLinear } from "d3";

interface Margins {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const DEFAULT_MARGINS: Margins = {};

interface Props<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => number | string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  xTickSpacing?: number;
  yTickSpacing?: number;
  // dimensions
  height: number;
  margins?: Margins;
  axisWidth?: number;
  // colors
  axisColor?: string;
  datapointColor?: string;
}

export const ReactLineChart = <T,>(props: Props<T>) => {
  // get props
  const {
    // data
    data,
    getX,
    getY,
    getZ,
    xAxisLabel,
    yAxisLabel,
    xTickSpacing = 50,
    yTickSpacing = 50,
    // dimensions
    height,
    margins = { left: 0, top: 0, right: 0, bottom: 0 },
    axisWidth = 50,
    // colors
    axisColor = "#000000",
    datapointColor = "#888888",
  } = props;

  // hooks
  const [ref, { width }] = useMeasure<SVGSVGElement>();

  // bounds
  const xRangeMax =
    width - (margins.left ?? 0) - (margins.right ?? 0) - axisWidth;
  const yRangeMax =
    height - (margins.top ?? 0) - (margins.bottom ?? 0) - axisWidth;

  // maxs
  const xMax = Math.max(...data.map(getX));
  const yMax = Math.max(...data.map(getY));

  // scales
  const xScale = scaleLinear({
    domain: [0, xMax],
    range: [axisWidth, xRangeMax + axisWidth],
    round: true,
    // padding: 0.2,
  });
  const yScale = scaleLinear({
    domain: [0, yMax],
    range: [yRangeMax, 0],
    round: true,
  });

  // tick values (undefined if log or time)
  const xNumTicks = width / xTickSpacing;
  const yNumTicks = height / yTickSpacing;
  const xTickValues = Array.from(
    { length: xNumTicks },
    (_, i) => (i / xNumTicks) * xMax
  );
  const yTickValues = Array.from(
    { length: yNumTicks },
    (_, i) => (i / yNumTicks) * yMax
  );

  // chart
  const chart = (
    <svg height={height} className="w-full" ref={ref}>
      {/* data */}
      <Group>
        {/* points */}
        {data.map((dp, i) => {
          const pointX = xScale(getX(dp));
          const pointY = yScale(getY(dp));

          return (
            <circle
              key={i}
              cx={pointX}
              cy={pointY}
              r={3}
              fill={datapointColor}
            />
          );
          // return (
          //   <Bar
          //     key={i}
          //     x={pointX}
          //     y={pointY}
          //     height={yRangeMax - pointY}
          //     width={4}
          //     fill={datapointColor}
          //   />
          // );
        })}
        <LinePath<T>
          curve={curveLinear}
          data={data}
          x={(dp) => xScale(getX(dp))}
          y={(dp) => yScale(getY(dp))}
          stroke="#333"
          strokeWidth={1}
        />
      </Group>

      {/* x axis */}
      <Axis
        orientation={Orientation.bottom}
        top={yRangeMax}
        scale={xScale}
        stroke={axisColor}
        tickStroke={axisColor}
        tickValues={xTickValues}
        // tickFormat={tickFormat}
        // tickLabelProps={tickLabelProps}
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
        left={axisWidth}
        scale={yScale}
        stroke={axisColor}
        tickStroke={axisColor}
        tickValues={yTickValues}
        label={yAxisLabel}
        labelProps={{
          y: -22,
          fontSize: 12,
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      />
    </svg>
  );

  return chart;
};
