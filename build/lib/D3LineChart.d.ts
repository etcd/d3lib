import * as d3 from "d3";
export declare const make: <T>(data: T[], { x, y, z, marginTop, marginRight, marginBottom, marginLeft, width, height, xType, xDomain, xRange, yType, yDomain, yRange, lineColor, strokeLinecap, strokeLinejoin, strokeWidth, strokeOpacity, xFormat, yFormat, xLabel, yLabel, xAxisOffset, drawLine, drawPoints, pointRadius, pointFillColor, pointFillOpacity, pointStrokeColor, pointStrokeOpacity, color, mixBlendMode, }: {
    /** given datapoint, returns the (temporal) x-value */
    readonly x: (p: T) => number;
    /** given datapoint, returns the (quantitative) y-value */
    readonly y: (p: T) => number;
    /** given datapoint, returns the (categorical) z-value */
    readonly z: (p: T) => number | string;
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
    readonly xType: (domain: Iterable<d3.NumberValue>, range: Iterable<number>) => d3.AxisScale<Date | d3.NumberValue>;
    /** x domain min and max */
    readonly xDomain?: readonly [number, number];
    /** x range min and max */
    readonly xRange: readonly [number, number];
    /**
     * Function to return the y-scale type. Valid scales
     * are ones with the `tickFormat` property.
     */
    readonly yType: (domain: Iterable<d3.NumberValue>, range: Iterable<number>) => d3.AxisScale<Date | d3.NumberValue>;
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
}) => SVGSVGElement;
