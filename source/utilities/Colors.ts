import { evenlySpacedNumbers, isAllDefined } from "./Arrays";

export type RgbArray = readonly [number, number, number];

/**
 * Converts an HSV color value to RGB.
 *
 * References:
 * https://gist.github.com/mjackson/5311256?permalink_comment_id=2789005#gistcomment-2789005
 * https://cs.stackexchange.com/questions/64549/convert-hsv-to-rgb-colors
 */
export const hsvToRgb = (
  /** hue ∈ [0, 360] */
  h: number,
  /** saturation ∈ [0, 1] */
  s: number,
  /** value ∈ [0, 1] */
  v: number
): /** [r ∈ [0, 255], g ∈ [0, 255], b ∈ [0, 255]], or undefined if invalid input */
RgbArray | undefined => {
  if (h < 0 || 360 < h) return undefined;
  if (s < 0 || 1 < s) return undefined;
  if (v < 0 || 1 < v) return undefined;

  const hprime = h / 60;
  const c = v * s;
  const x = c * (1 - Math.abs((hprime % 2) - 1));

  let r, g, b;
  if (hprime === 0) {
    r = 0;
    g = 0;
    b = 0;
  } else if (hprime > 0 && hprime < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (hprime >= 1 && hprime < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (hprime >= 2 && hprime < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (hprime >= 3 && hprime < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (hprime >= 4 && hprime < 5) {
    r = x;
    g = 0;
    b = c;
  } else if (hprime >= 5 && hprime <= 6) {
    r = c;
    g = 0;
    b = x;
  } else {
    return undefined;
  }

  const m = v - c;

  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ] as const;
};

/**
 * Returns a desired number of colors evenly distributed in
 * HSV color space.
 */
export const evenlySpacedColors = (
  /** desired number of colors */
  nColors: number,
  /** saturation of color ∈ [0, 1] */
  saturation: number,
  /** value of color ∈ [0, 1] */
  value: number
): /** An array of [r ∈ [0, 255], g ∈ [0, 255], b ∈ [0, 255]], or undefined if invalid input */
readonly RgbArray[] | undefined => {
  const hues = evenlySpacedNumbers(nColors, 0, 360);
  if (hues === undefined) return undefined;

  const colors = hues.map((n) => hsvToRgb(n, saturation, value));
  if (!isAllDefined(colors)) return undefined;

  return colors;
};

export const rgbArrayToString = (rgbArray: RgbArray): `rgb${string}` => {
  return `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
};
