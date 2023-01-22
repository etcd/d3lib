/** Creates an array with contents [0, 1, ..., n-1] */
export const range = (n: number) => [...Array(n).keys()];

// TODO: extend this for generic comparables, not just number
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

export const groupBy = <Element>(
  array: readonly Element[],
  getGroup: (element: Element) => string
) => {
  // the unique groups that elements can be part of
  const uniqueGroups = [...new Set(array.map((element) => getGroup(element)))];

  // the group accumulator used by the reduce below; this is what is returned
  const accumulator: {
    [group: string]: Element[];
  } = Object.fromEntries(uniqueGroups.map((group) => [group, []]));

  // put each element into correct group
  array.map((element) => {
    const group = getGroup(element);
    if (accumulator[group] !== undefined) accumulator[group]?.push(element);
    else accumulator[group] = [element];
  });

  return accumulator;
};
