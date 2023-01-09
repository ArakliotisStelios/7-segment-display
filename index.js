"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SevenSegmentDisplay = function SevenSegmentDisplay(_ref) {
  var number = _ref.number,
      style = _ref.style,
      ledColorOff = _ref.ledColorOff,
      ledColorOn = _ref.ledColorOn,
      ledBorder = _ref.ledBorder;
  var sevenSegmentObj = {
    "0": ["a", "b", "c", "d", "e", "f"],
    "1": ["b", "c"],
    "2": ["a", "b", "d", "e", "g"],
    "3": ["a", "b", "c", "d", "g"],
    "4": ["b", "c", "f", "g"],
    "5": ["a", "c", "d", "f", "g"],
    "6": ["a", "c", "d", "e", "f", "g"],
    "7": ["a", "b", "c"],
    "8": ["a", "b", "c", "d", "e", "f", "g"],
    "9": ["a", "b", "c", "d", "f", "g"],
    "invalid": ["g"]
  };
  var elementsRef = (0, _react.useRef)(sevenSegmentObj[8].map(function () {
    return /*#__PURE__*/(0, _react.createRef)();
  }));

  var refreshSegments = function refreshSegments() {
    elementsRef.current.forEach(function (polygon) {
      polygon.current.style.fill = ledColorOff;
    });
  };

  var calculateLeds = function calculateLeds(num) {
    sevenSegmentObj[8].filter(function (x) {
      return sevenSegmentObj[num].includes(x);
    }).forEach(function (letter) {
      elementsRef.current.forEach(function (polygon) {
        if (polygon.current.id === letter) {
          polygon.current.style.fill = ledColorOn;
        }
      });
    });
  };

  (0, _react.useEffect)(function () {
    refreshSegments();
    number > -1 && number < 10 ? calculateLeds(number) : calculateLeds("invalid");
  }, [number]);
  return /*#__PURE__*/_react["default"].createElement("svg", {
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    width: "192px",
    height: "320px",
    viewBox: "-1 -1 12 20"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "abcdefg",
    style: {
      fillRule: 'evenodd',
      stroke: "".concat(ledBorder),
      strokeWidth: "0.25",
      strokeOpacity: "1",
      strokeLinecap: "butt",
      strokeLinejoin: "miter"
    }
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[0],
    id: "a",
    points: " 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2",
    fill: ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[1],
    id: "b",
    points: " 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2",
    fill: ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[2],
    id: "c",
    points: " 9, 9 10,10 10,16  9,17  8,16  8,10",
    fill: ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[3],
    id: "d",
    points: " 9,17  8,18  2,18  1,17  2,16  8,16",
    fill: ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[4],
    id: "e",
    points: " 1,17  0,16  0,10  1, 9  2,10  2,16",
    fill: ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[5],
    id: "f",
    points: " 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8",
    fill: ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    ref: elementsRef.current[6],
    id: "g",
    points: " 1, 9  2, 8  8, 8  9, 9  8,10  2,10",
    fill: ledColorOff
  })));
};

SevenSegmentDisplay.defaultProps = {
  character: 0,
  ledColorOff: "transparent",
  ledColorOn: "red",
  ledBorder: "black"
};
SevenSegmentDisplay.propTypes = {
  character: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  ledColorOff: _propTypes["default"].string,
  ledColorOn: _propTypes["default"].string,
  ledBorder: _propTypes["default"].string
};
var _default = SevenSegmentDisplay;
exports["default"] = _default;
