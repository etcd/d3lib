function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import { useLayoutEffect, useState } from "react";
export var useWindowSize = function() {
    var _useState = _slicedToArray(useState([
        0,
        0
    ]), 2), size = _useState[0], setSize = _useState[1];
    useLayoutEffect(function() {
        var updateSize = function() {
            setSize([
                window.innerWidth,
                window.innerHeight
            ]);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return function() {
            window.removeEventListener("resize", updateSize);
        };
    }, []);
    return size;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlsaXRpZXMvdXNlV2luZG93U2l6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlU2l6ZSA9ICgpID0+IHtcbiAgICAgIHNldFNpemUoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XG5cbiAgICB1cGRhdGVTaXplKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBzaXplO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVdpbmRvd1NpemUiLCJzaXplIiwic2V0U2l6ZSIsInVwZGF0ZVNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGVBQWUsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFFbEQsT0FBTyxJQUFNQyxnQkFBZ0IsV0FBTTtJQUNqQyxJQUF3QkQsMkJBQUFBLFNBQVM7UUFBQztRQUFHO0tBQUUsT0FBaENFLE9BQWlCRixjQUFYRyxVQUFXSDtJQUV4QkQsZ0JBQWdCLFdBQU07UUFDcEIsSUFBTUssYUFBYSxXQUFNO1lBQ3ZCRCxRQUFRO2dCQUFDRSxPQUFPQyxVQUFVO2dCQUFFRCxPQUFPRSxXQUFXO2FBQUM7UUFDakQ7UUFFQUYsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUo7UUFFbENBO1FBRUEsT0FBTyxXQUFNO1lBQ1hDLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVMO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBT0Y7QUFDVCxFQUFFIn0=