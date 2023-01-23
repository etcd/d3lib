export const formatNumber = (n: number) => {
  if (Number.isInteger(n)) {
    return n;
  }

  return n.toFixed(3);
};
