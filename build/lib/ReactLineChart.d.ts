/// <reference types="react" />
interface Margins {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface ChartProps<T> {
    data: T[];
    getX: (p: T) => number;
    getY: (p: T) => number;
    getZ?: (p: T) => string;
    xAxisLabel?: string;
    yAxisLabel?: string;
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
export declare const Chart: <T>(props: ChartProps<T>) => JSX.Element;
export declare const render: <T>(props: ChartProps<T>) => (target: HTMLElement) => void;
export {};
