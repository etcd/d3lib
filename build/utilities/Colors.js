import { evenlySpacedNumbers, isAllDefined } from "./Arrays";
/**
 * Converts an HSV color value to RGB.
 *
 * References:
 * https://gist.github.com/mjackson/5311256?permalink_comment_id=2789005#gistcomment-2789005
 * https://cs.stackexchange.com/questions/64549/convert-hsv-to-rgb-colors
 */ export var hsvToRgb = function(/** hue ∈ [0, 360] */ h, /** saturation ∈ [0, 1] */ s, /** value ∈ [0, 1] */ v) {
    if (h < 0 || 360 < h) return undefined;
    if (s < 0 || 1 < s) return undefined;
    if (v < 0 || 1 < v) return undefined;
    var hprime = h / 60;
    var c = v * s;
    var x = c * (1 - Math.abs(hprime % 2 - 1));
    var r, g, b;
    if (hprime >= 0 && hprime < 1) {
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
    var m = v - c;
    return [
        Math.round((r + m) * 255),
        Math.round((g + m) * 255),
        Math.round((b + m) * 255)
    ];
};
/**
 * Returns a desired number of colors evenly distributed in
 * HSV color space.
 */ export var evenlySpacedColors = function(/** desired number of colors */ nColors, /** saturation of color ∈ [0, 1] */ saturation, /** value of color ∈ [0, 1] */ value) {
    var hues = evenlySpacedNumbers(nColors, 0, 360);
    if (hues === undefined) return undefined;
    var colors = hues.map(function(n) {
        return hsvToRgb(n, saturation, value);
    });
    if (!isAllDefined(colors)) return undefined;
    return colors;
};
export var rgbArrayToString = function(rgbArray) {
    return "rgb(".concat(rgbArray[0], ",").concat(rgbArray[1], ",").concat(rgbArray[2], ")");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlsaXRpZXMvQ29sb3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV2ZW5seVNwYWNlZE51bWJlcnMsIGlzQWxsRGVmaW5lZCB9IGZyb20gXCIuL0FycmF5c1wiO1xuXG5leHBvcnQgdHlwZSBSZ2JBcnJheSA9IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBIU1YgY29sb3IgdmFsdWUgdG8gUkdCLlxuICpcbiAqIFJlZmVyZW5jZXM6XG4gKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tamFja3Nvbi81MzExMjU2P3Blcm1hbGlua19jb21tZW50X2lkPTI3ODkwMDUjZ2lzdGNvbW1lbnQtMjc4OTAwNVxuICogaHR0cHM6Ly9jcy5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvNjQ1NDkvY29udmVydC1oc3YtdG8tcmdiLWNvbG9yc1xuICovXG5leHBvcnQgY29uc3QgaHN2VG9SZ2IgPSAoXG4gIC8qKiBodWUg4oiIIFswLCAzNjBdICovXG4gIGg6IG51bWJlcixcbiAgLyoqIHNhdHVyYXRpb24g4oiIIFswLCAxXSAqL1xuICBzOiBudW1iZXIsXG4gIC8qKiB2YWx1ZSDiiIggWzAsIDFdICovXG4gIHY6IG51bWJlclxuKTogLyoqIFtyIOKIiCBbMCwgMjU1XSwgZyDiiIggWzAsIDI1NV0sIGIg4oiIIFswLCAyNTVdXSwgb3IgdW5kZWZpbmVkIGlmIGludmFsaWQgaW5wdXQgKi9cblJnYkFycmF5IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKGggPCAwIHx8IDM2MCA8IGgpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChzIDwgMCB8fCAxIDwgcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgaWYgKHYgPCAwIHx8IDEgPCB2KSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGhwcmltZSA9IGggLyA2MDtcbiAgY29uc3QgYyA9IHYgKiBzO1xuICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGhwcmltZSAlIDIpIC0gMSkpO1xuXG4gIGxldCByLCBnLCBiO1xuICBpZiAoaHByaW1lID49IDAgJiYgaHByaW1lIDwgMSkge1xuICAgIHIgPSBjO1xuICAgIGcgPSB4O1xuICAgIGIgPSAwO1xuICB9IGVsc2UgaWYgKGhwcmltZSA+PSAxICYmIGhwcmltZSA8IDIpIHtcbiAgICByID0geDtcbiAgICBnID0gYztcbiAgICBiID0gMDtcbiAgfSBlbHNlIGlmIChocHJpbWUgPj0gMiAmJiBocHJpbWUgPCAzKSB7XG4gICAgciA9IDA7XG4gICAgZyA9IGM7XG4gICAgYiA9IHg7XG4gIH0gZWxzZSBpZiAoaHByaW1lID49IDMgJiYgaHByaW1lIDwgNCkge1xuICAgIHIgPSAwO1xuICAgIGcgPSB4O1xuICAgIGIgPSBjO1xuICB9IGVsc2UgaWYgKGhwcmltZSA+PSA0ICYmIGhwcmltZSA8IDUpIHtcbiAgICByID0geDtcbiAgICBnID0gMDtcbiAgICBiID0gYztcbiAgfSBlbHNlIGlmIChocHJpbWUgPj0gNSAmJiBocHJpbWUgPD0gNikge1xuICAgIHIgPSBjO1xuICAgIGcgPSAwO1xuICAgIGIgPSB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBtID0gdiAtIGM7XG5cbiAgcmV0dXJuIFtcbiAgICBNYXRoLnJvdW5kKChyICsgbSkgKiAyNTUpLFxuICAgIE1hdGgucm91bmQoKGcgKyBtKSAqIDI1NSksXG4gICAgTWF0aC5yb3VuZCgoYiArIG0pICogMjU1KSxcbiAgXSBhcyBjb25zdDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGRlc2lyZWQgbnVtYmVyIG9mIGNvbG9ycyBldmVubHkgZGlzdHJpYnV0ZWQgaW5cbiAqIEhTViBjb2xvciBzcGFjZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW5seVNwYWNlZENvbG9ycyA9IChcbiAgLyoqIGRlc2lyZWQgbnVtYmVyIG9mIGNvbG9ycyAqL1xuICBuQ29sb3JzOiBudW1iZXIsXG4gIC8qKiBzYXR1cmF0aW9uIG9mIGNvbG9yIOKIiCBbMCwgMV0gKi9cbiAgc2F0dXJhdGlvbjogbnVtYmVyLFxuICAvKiogdmFsdWUgb2YgY29sb3Ig4oiIIFswLCAxXSAqL1xuICB2YWx1ZTogbnVtYmVyXG4pOiAvKiogQW4gYXJyYXkgb2YgW3Ig4oiIIFswLCAyNTVdLCBnIOKIiCBbMCwgMjU1XSwgYiDiiIggWzAsIDI1NV1dLCBvciB1bmRlZmluZWQgaWYgaW52YWxpZCBpbnB1dCAqL1xucmVhZG9ubHkgUmdiQXJyYXlbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGh1ZXMgPSBldmVubHlTcGFjZWROdW1iZXJzKG5Db2xvcnMsIDAsIDM2MCk7XG4gIGlmIChodWVzID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgY29uc3QgY29sb3JzID0gaHVlcy5tYXAoKG4pID0+IGhzdlRvUmdiKG4sIHNhdHVyYXRpb24sIHZhbHVlKSk7XG4gIGlmICghaXNBbGxEZWZpbmVkKGNvbG9ycykpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIGNvbG9ycztcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JBcnJheVRvU3RyaW5nID0gKHJnYkFycmF5OiBSZ2JBcnJheSk6IGByZ2Ike3N0cmluZ31gID0+IHtcbiAgcmV0dXJuIGByZ2IoJHtyZ2JBcnJheVswXX0sJHtyZ2JBcnJheVsxXX0sJHtyZ2JBcnJheVsyXX0pYDtcbn07XG4iXSwibmFtZXMiOlsiZXZlbmx5U3BhY2VkTnVtYmVycyIsImlzQWxsRGVmaW5lZCIsImhzdlRvUmdiIiwiaCIsInMiLCJ2IiwidW5kZWZpbmVkIiwiaHByaW1lIiwiYyIsIngiLCJNYXRoIiwiYWJzIiwiciIsImciLCJiIiwibSIsInJvdW5kIiwiZXZlbmx5U3BhY2VkQ29sb3JzIiwibkNvbG9ycyIsInNhdHVyYXRpb24iLCJ2YWx1ZSIsImh1ZXMiLCJjb2xvcnMiLCJtYXAiLCJuIiwicmdiQXJyYXlUb1N0cmluZyIsInJnYkFycmF5Il0sIm1hcHBp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