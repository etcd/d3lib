// import { Group } from "@visx/group";
import { Axis, Orientation } from "@visx/axis";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { useMeasure } from "react-use";

interface Margins {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface Props<T> {
  // data
  data: T[];
  getX: (p: T) => number;
  getY: (p: T) => number;
  getZ: (p: T) => number | string;
  xAxisLabel?: string;
  yAxisLabel?: string;

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

  // scales
  const xScale = scaleBand({
    domain: data.map(getX),
    range: [axisWidth, xRangeMax + axisWidth],
    round: true,
    padding: 0.2,
  });
  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(getY))],
    range: [yRangeMax, 0],
    round: true,
  });

  // chart
  const chart = (
    <svg height={height} className="w-full" ref={ref}>
      {/* bars */}
      {data.map((dp, i) => {
        // points
        const xPoint = xScale(getX(dp));
        const yPoint = yScale(getY(dp));

        return (
          <Bar
            key={i}
            x={xPoint}
            y={yPoint}
            height={yRangeMax - yPoint}
            width={xScale.bandwidth()}
            fill={datapointColor}
          />
        );
      })}

      {/* x axis */}
      <Axis
        orientation={Orientation.bottom}
        top={yRangeMax}
        scale={xScale}
        stroke={axisColor}
        tickStroke={axisColor}
        tickValues={data.map(getX)} // undefined if log or time
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
        tickValues={data.map(getY)} // undefined if log or time
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
