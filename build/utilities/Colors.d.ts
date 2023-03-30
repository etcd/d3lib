export type RgbArray = readonly [number, number, number];
/**
 * Converts an HSV color value to RGB.
 *
 * References:
 * https://gist.github.com/mjackson/5311256?permalink_comment_id=2789005#gistcomment-2789005
 * https://cs.stackexchange.com/questions/64549/convert-hsv-to-rgb-colors
 */
export declare const hsvToRgb: (h: number, s: number, v: number) => /** [r ∈ [0, 255], g ∈ [0, 255], b ∈ [0, 255]], or undefined if invalid input */ RgbArray | undefined;
/**
 * Returns a desired number of colors evenly distributed in
 * HSV color space.
 */
export declare const evenlySpacedColors: (nColors: number, saturation: number, value: number) => /** An array of [r ∈ [0, 255], g ∈ [0, 255], b ∈ [0, 255]], or undefined if invalid input */ readonly RgbArray[] | undefined;
export declare const rgbArrayToString: (rgbArray: RgbArray) => `rgb${string}`;
