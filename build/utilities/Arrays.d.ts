/** Creates an array with contents [0, 1, ..., n-1] */
export declare const range: (n: number) => number[];
/** Gets the min and max of a number array in a single pass */
export declare const extent: (array: readonly number[]) => readonly [number, number];
/** Groups an array of elements by some key of each element. */
export declare const groupBy: <Element_1>(array: readonly Element_1[], getGroup: (element: Element_1) => string, sortGroupsBy?: (element: Element_1) => number) => {
    [group: string]: Element_1[];
} | Element_1[][];
/** Returns a given amount of evenly spaced numbers */
export declare const evenlySpacedNumbers: (n: number, min: number, max: number) => readonly number[] | undefined;
/** Type guard for an array with no `undefined` or `null` values */
export declare const isAllDefined: <T>(value: NonNullable<T>[]) => value is NonNullable<T>[];
