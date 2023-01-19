/** Creates an array with contents [0, 1, ..., n-1] */
export const range = (n: number) => [...Array(n).keys()];

// TODO: extend this for generic comparables
/** Gets the min and max of a number array in a single pass */
export const extent = (array: readonly number[]) => {
  if (array.length === 0) return [undefined, undefined] as const;

  return array.reduce(
    (prev, current) => {
      if (prev[1] < current) return [prev[0], current] as const;
      if (current < prev[0]) return [current, prev[1]] as const;
      return prev;
    },
    [array[0]!, array[0]!] as const
  );
};
