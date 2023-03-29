/** Creates an array with contents [0, 1, ..., n-1] */ function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
export var range = function(n) {
    return _toConsumableArray(Array(n).keys());
};
// TODO: extend this for generic comparables, not just number
/** Gets the min and max of a number array in a single pass */ export var extent = function(array) {
    if (array.length === 0) return [
        undefined,
        undefined
    ];
    return array.reduce(function(prev, current) {
        if (prev[1] < current) return [
            prev[0],
            current
        ];
        if (current < prev[0]) return [
            current,
            prev[1]
        ];
        return prev;
    }, [
        array[0],
        array[0]
    ]);
};
/** Groups an array of elements by some key of each element. */ export var groupBy = function(array, getGroup, sortGroupsBy) {
    // the unique groups that elements can be part of
    var uniqueGroups = _toConsumableArray(new Set(array.map(function(element) {
        return getGroup(element);
    })));
    // the group accumulator used by the reduce below; this is what is returned
    var accumulator = Object.fromEntries(uniqueGroups.map(function(group) {
        return [
            group,
            []
        ];
    }));
    // put each element into correct group
    array.map(function(element) {
        var _accumulator_group;
        var group = getGroup(element);
        if (accumulator[group] !== undefined) (_accumulator_group = accumulator[group]) === null || _accumulator_group === void 0 ? void 0 : _accumulator_group.push(element);
        else accumulator[group] = [
            element
        ];
    });
    if (sortGroupsBy === undefined) return accumulator;
    return Object.keys(accumulator).map(function(group) {
        return _toConsumableArray(accumulator[group]).sort(function(e1, e2) {
            return sortGroupsBy(e1) - sortGroupsBy(e2);
        });
    });
};
/** Returns a given amount of evenly spaced numbers */ export var evenlySpacedNumbers = function(/** Desired amount of numbers */ n, /** The first output number */ min, /** The last output number */ max) {
    if (n < 0) return undefined;
    if (max < min) return undefined;
    var nColorsFloor = Math.floor(n);
    var spacing = (max - min) / nColorsFloor;
    return Array.from({
        length: nColorsFloor
    }, function(_, i) {
        return min + i * spacing;
    });
};
/** Type guard for a value being not `null` and not `undefined` */ var _isDefined = function(value) {
    return value !== null && value !== undefined;
};
/** Type guard for an array with no `undefined` or `null` values */ export var isAllDefined = function(value) {
    return value.every(_isDefined);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlsaXRpZXMvQXJyYXlzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDcmVhdGVzIGFuIGFycmF5IHdpdGggY29udGVudHMgWzAsIDEsIC4uLiwgbi0xXSAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKG46IG51bWJlcikgPT4gWy4uLkFycmF5KG4pLmtleXMoKV07XG5cbi8vIFRPRE86IGV4dGVuZCB0aGlzIGZvciBnZW5lcmljIGNvbXBhcmFibGVzLCBub3QganVzdCBudW1iZXJcbi8qKiBHZXRzIHRoZSBtaW4gYW5kIG1heCBvZiBhIG51bWJlciBhcnJheSBpbiBhIHNpbmdsZSBwYXNzICovXG5leHBvcnQgY29uc3QgZXh0ZW50ID0gKGFycmF5OiByZWFkb25seSBudW1iZXJbXSkgPT4ge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSBhcyBjb25zdDtcblxuICByZXR1cm4gYXJyYXkucmVkdWNlKFxuICAgIChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICBpZiAocHJldlsxXSA8IGN1cnJlbnQpIHJldHVybiBbcHJldlswXSwgY3VycmVudF0gYXMgY29uc3Q7XG4gICAgICBpZiAoY3VycmVudCA8IHByZXZbMF0pIHJldHVybiBbY3VycmVudCwgcHJldlsxXV0gYXMgY29uc3Q7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LFxuICAgIFthcnJheVswXSEsIGFycmF5WzBdIV0gYXMgY29uc3RcbiAgKTtcbn07XG5cbi8qKiBHcm91cHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgYnkgc29tZSBrZXkgb2YgZWFjaCBlbGVtZW50LiAqL1xuZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSA8RWxlbWVudD4oXG4gIGFycmF5OiByZWFkb25seSBFbGVtZW50W10sXG4gIGdldEdyb3VwOiAoZWxlbWVudDogRWxlbWVudCkgPT4gc3RyaW5nLFxuICBzb3J0R3JvdXBzQnk/OiAoZWxlbWVudDogRWxlbWVudCkgPT4gbnVtYmVyXG4pID0+IHtcbiAgLy8gdGhlIHVuaXF1ZSBncm91cHMgdGhhdCBlbGVtZW50cyBjYW4gYmUgcGFydCBvZlxuICBjb25zdCB1bmlxdWVHcm91cHMgPSBbLi4ubmV3IFNldChhcnJheS5tYXAoKGVsZW1lbnQpID0+IGdldEdyb3VwKGVsZW1lbnQpKSldO1xuXG4gIC8vIHRoZSBncm91cCBhY2N1bXVsYXRvciB1c2VkIGJ5IHRoZSByZWR1Y2UgYmVsb3c7IHRoaXMgaXMgd2hhdCBpcyByZXR1cm5lZFxuICBjb25zdCBhY2N1bXVsYXRvcjoge1xuICAgIFtncm91cDogc3RyaW5nXTogRWxlbWVudFtdO1xuICB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKHVuaXF1ZUdyb3Vwcy5tYXAoKGdyb3VwKSA9PiBbZ3JvdXAsIFtdXSkpO1xuXG4gIC8vIHB1dCBlYWNoIGVsZW1lbnQgaW50byBjb3JyZWN0IGdyb3VwXG4gIGFycmF5Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGdyb3VwID0gZ2V0R3JvdXAoZWxlbWVudCk7XG4gICAgaWYgKGFjY3VtdWxhdG9yW2dyb3VwXSAhPT0gdW5kZWZpbmVkKSBhY2N1bXVsYXRvcltncm91cF0/LnB1c2goZWxlbWVudCk7XG4gICAgZWxzZSBhY2N1bXVsYXRvcltncm91cF0gPSBbZWxlbWVudF07XG4gIH0pO1xuXG4gIGlmIChzb3J0R3JvdXBzQnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGFjY3VtdWxhdG9yO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhhY2N1bXVsYXRvcikubWFwKChncm91cCkgPT4ge1xuICAgIHJldHVybiBbLi4uYWNjdW11bGF0b3JbZ3JvdXBdIV0uc29ydChcbiAgICAgIChlMTogRWxlbWVudCwgZTI6IEVsZW1lbnQpID0+IHNvcnRHcm91cHNCeShlMSkgLSBzb3J0R3JvdXBzQnkoZTIpXG4gICAgKTtcbiAgfSk7XG59O1xuXG4vKiogUmV0dXJucyBhIGdpdmVuIGFtb3VudCBvZiBldmVubHkgc3BhY2VkIG51bWJlcnMgKi9cbmV4cG9ydCBjb25zdCBldmVubHlTcGFjZWROdW1iZXJzID0gKFxuICAvKiogRGVzaXJlZCBhbW91bnQgb2YgbnVtYmVycyAqL1xuICBuOiBudW1iZXIsXG4gIC8qKiBUaGUgZmlyc3Qgb3V0cHV0IG51bWJlciAqL1xuICBtaW46IG51bWJlcixcbiAgLyoqIFRoZSBsYXN0IG91dHB1dCBudW1iZXIgKi9cbiAgbWF4OiBudW1iZXJcbik6IHJlYWRvbmx5IG51bWJlcltdIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKG4gPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICBpZiAobWF4IDwgbWluKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIGNvbnN0IG5Db2xvcnNGbG9vciA9IE1hdGguZmxvb3Iobik7XG4gIGNvbnN0IHNwYWNpbmcgPSAobWF4IC0gbWluKSAvIG5Db2xvcnNGbG9vcjtcblxuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbkNvbG9yc0Zsb29yIH0sIChfLCBpKSA9PiBtaW4gKyBpICogc3BhY2luZyk7XG59O1xuXG4vKiogVHlwZSBndWFyZCBmb3IgYSB2YWx1ZSBiZWluZyBub3QgYG51bGxgIGFuZCBub3QgYHVuZGVmaW5lZGAgKi9cbmNvbnN0IF9pc0RlZmluZWQgPSA8VD4oXG4gIHZhbHVlOiBOb25OdWxsYWJsZTxUPiB8IHVuZGVmaW5lZCB8IG51bGxcbik6IHZhbHVlIGlzIE5vbk51bGxhYmxlPFQ+ID0+IHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKiogVHlwZSBndWFyZCBmb3IgYW4gYXJyYXkgd2l0aCBubyBgdW5kZWZpbmVkYCBvciBgbnVsbGAgdmFsdWVzICovXG5leHBvcnQgY29uc3QgaXNBbGxEZWZpbmVkID0gPFQ+KFxuICB2YWx1ZTogQXJyYXk8Tm9uTnVsbGFibGU8VD4gfCB1bmRlZmluZWQgfCBudWxsPlxuKTogdmFsdWUgaXMgQXJyYXk8Tm9uTnVsbGFibGU8VD4+ID0+IHtcbiAgcmV0dXJuIHZhbHVlLmV2ZXJ5KF9pc0RlZmluZWQpO1xufTtcbiJdLCJuYW1lcyI6WyJyYW5nZSIsIm4iLCJBcnJheSIsImtleXMiLCJleHRlbnQiLCJhcnJheSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiZ3JvdXBCeSIsImdldEdyb3VwIiwic29ydEdyb3Vwc0J5IiwidW5pcXVlR3JvdXBzIiwiU2V0IiwibWFwIiwiZWxlbWVudCIsImFjY3VtdWxhdG9yIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJncm91cCIsInB1c2giLCJzb3J0IiwiZTEiLCJlMiIsImV2ZW5seVNwYWNlZE51bWJlcnMiLCJtaW4iLCJtYXgiLCJuQ29sb3JzRmxvb3IiLCJNYXRoIiwiZmxvb3IiLCJzcGFjaW5nIiwiZnJvbSIsIl8iLCJpIiwiX2lzRGVmaW5lZCIsInZhbHVlIiwiaXNBbGxEZWZpbmVkIiwiZXZlcnkiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNwRCxPQUFPLElBQU1BLFFBQVEsU0FBQ0M7V0FBZSxtQkFBR0MsTUFBTUQsR0FBR0UsSUFBSTtFQUFJO0FBRXpELDZEQUE2RDtBQUM3RCw0REFBNEQsR0FDNUQsT0FBTyxJQUFNQyxTQUFTLFNBQUNDLE9BQTZCO0lBQ2xELElBQUlBLE1BQU1DLE1BQU0sS0FBSyxHQUFHLE9BQU87UUFBQ0M7UUFBV0E7S0FBVTtJQUVyRCxPQUFPRixNQUFNRyxNQUFNLENBQ2pCLFNBQUNDLE1BQU1DLFNBQVk7UUFDakIsSUFBSUQsSUFBSSxDQUFDLEVBQUUsR0FBR0MsU0FBUyxPQUFPO1lBQUNELElBQUksQ0FBQyxFQUFFO1lBQUVDO1NBQVE7UUFDaEQsSUFBSUEsVUFBVUQsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPO1lBQUNDO1lBQVNELElBQUksQ0FBQyxFQUFFO1NBQUM7UUFDaEQsT0FBT0E7SUFDVCxHQUNBO1FBQUNKLEtBQUssQ0FBQyxFQUFFO1FBQUdBLEtBQUssQ0FBQyxFQUFFO0tBQUU7QUFFMUIsRUFBRTtBQUVGLDZEQUE2RCxHQUM3RCxPQUFPLElBQU1NLFVBQVUsU0FDckJOLE9BQ0FPLFVBQ0FDLGNBQ0c7SUFDSCxpREFBaUQ7SUFDakQsSUFBTUMsZUFBZ0IsbUJBQUcsSUFBSUMsSUFBSVYsTUFBTVcsR0FBRyxDQUFDLFNBQUNDO2VBQVlMLFNBQVNLOztJQUVqRSwyRUFBMkU7SUFDM0UsSUFBTUMsY0FFRkMsT0FBT0MsV0FBVyxDQUFDTixhQUFhRSxHQUFHLENBQUMsU0FBQ0s7ZUFBVTtZQUFDQTtZQUFPLEVBQUU7U0FBQzs7SUFFOUQsc0NBQXNDO0lBQ3RDaEIsTUFBTVcsR0FBRyxDQUFDLFNBQUNDLFNBQVk7WUFFaUJDO1FBRHRDLElBQU1HLFFBQVFULFNBQVNLO1FBQ3ZCLElBQUlDLFdBQVcsQ0FBQ0csTUFBTSxLQUFLZCxXQUFXVyxDQUFBQSxxQkFBQUEsV0FBVyxDQUFDRyxNQUFNLGNBQWxCSCxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW9CSSxLQUFLTDthQUMxREMsV0FBVyxDQUFDRyxNQUFNLEdBQUc7WUFBQ0o7U0FBUTtJQUNyQztJQUVBLElBQUlKLGlCQUFpQk4sV0FBVyxPQUFPVztJQUV2QyxPQUFPQyxPQUFPaEIsSUFBSSxDQUFDZSxhQUFhRixHQUFHLENBQUMsU0FBQ0ssT0FBVTtRQUM3QyxPQUFPLEFBQUMsbUJBQUdILFdBQVcsQ0FBQ0csTUFBTSxFQUFHRSxJQUFJLENBQ2xDLFNBQUNDLElBQWFDO21CQUFnQlosYUFBYVcsTUFBTVgsYUFBYVk7O0lBRWxFO0FBQ0YsRUFBRTtBQUVGLG9EQUFvRCxHQUNwRCxPQUFPLElBQU1DLHNCQUFzQixTQUNqQyw4QkFBOEIsR0FDOUJ6QixHQUNBLDRCQUE0QixHQUM1QjBCLEtBQ0EsMkJBQTJCLEdBQzNCQyxLQUNrQztJQUNsQyxJQUFJM0IsSUFBSSxHQUFHLE9BQU9NO0lBQ2xCLElBQUlxQixNQUFNRCxLQUFLLE9BQU9wQjtJQUV0QixJQUFNc0IsZUFBZUMsS0FBS0MsS0FBSyxDQUFDOUI7SUFDaEMsSUFBTStCLFVBQVUsQUFBQ0osQ0FBQUEsTUFBTUQsR0FBRSxJQUFLRTtJQUU5QixPQUFPM0IsTUFBTStCLElBQUksQ0FBQztRQUFFM0IsUUFBUXVCO0lBQWEsR0FBRyxTQUFDSyxHQUFHQztlQUFNUixNQUFNUSxJQUFJSDs7QUFDbEUsRUFBRTtBQUVGLGdFQUFnRSxHQUNoRSxJQUFNSSxhQUFhLFNBQ2pCQyxPQUM0QjtJQUM1QixPQUFPQSxVQUFVLElBQUksSUFBSUEsVUFBVTlCO0FBQ3JDO0FBRUEsaUVBQWlFLEdBQ2pFLE9BQU8sSUFBTStCLGVBQWUsU0FDMUJELE9BQ21DO0lBQ25DLE9BQU9BLE1BQU1FLEtBQUssQ0FBQ0g7QUFDckIsRUFBRSJ9