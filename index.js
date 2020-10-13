"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _segment = _interopRequireDefault(require("./lib/7segment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *
 * @param character to display, if there will be more that one, display will fallback to E
 * @param style styles passed to SVG
 * @param ledColorOff color of the active segments
 * @param ledColorOn color of the incactive segments
 * @param ledBorder border color
 */
var SevenSegmentDisplay = function SevenSegmentDisplay(_ref) {
  var character = _ref.character,
      style = _ref.style,
      ledColorOff = _ref.ledColorOff,
      ledColorOn = _ref.ledColorOn,
      ledBorder = _ref.ledBorder;

  var byteQuery = function byteQuery(_int, i) {
    return _int & 1 << i;
  };

  return /*#__PURE__*/_react["default"].createElement("svg", {
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    width: "192px",
    height: "320px",
    viewBox: "-1 -1 12 20"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    id: "abcdefg",
    style: {
      fillRule: "evenodd",
      stroke: "".concat(ledBorder),
      strokeWidth: "0.25",
      strokeOpacity: "1",
      strokeLinecap: "butt",
      strokeLinejoin: "miter"
    }
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "a",
    points: " 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2",
    fill: byteQuery(_segment["default"][character], 0) ? ledColorOn : ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "b",
    points: " 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2",
    fill: byteQuery(_segment["default"][character], 1) ? ledColorOn : ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "c",
    points: " 9, 9 10,10 10,16  9,17  8,16  8,10",
    fill: byteQuery(_segment["default"][character], 2) ? ledColorOn : ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "d",
    points: " 9,17  8,18  2,18  1,17  2,16  8,16",
    fill: byteQuery(_segment["default"][character], 3) ? ledColorOn : ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "e",
    points: " 1,17  0,16  0,10  1, 9  2,10  2,16",
    fill: byteQuery(_segment["default"][character], 4) ? ledColorOn : ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "f",
    points: " 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8",
    fill: byteQuery(_segment["default"][character], 5) ? ledColorOn : ledColorOff
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    id: "g",
    points: " 1, 9  2, 8  8, 8  9, 9  8,10  2,10",
    fill: byteQuery(_segment["default"][character], 6) ? ledColorOn : ledColorOff
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _$$$$$$$$$$$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author dmadison
 * @repository https://github.com/dmadison/LED-Segment-ASCII
 */
var _default = (_$$$$$$$$$$$ = {}, _defineProperty(_$$$$$$$$$$$, " ", 0x00), _defineProperty(_$$$$$$$$$$$, "!", 0x86), _defineProperty(_$$$$$$$$$$$, '"', 0x22), _defineProperty(_$$$$$$$$$$$, "#", 0x7e), _defineProperty(_$$$$$$$$$$$, "$", 0x6d), _defineProperty(_$$$$$$$$$$$, "%", 0xd2), _defineProperty(_$$$$$$$$$$$, "&", 0x46), _defineProperty(_$$$$$$$$$$$, "'", 0x20), _defineProperty(_$$$$$$$$$$$, "(", 0x29), _defineProperty(_$$$$$$$$$$$, ")", 0x0b), _defineProperty(_$$$$$$$$$$$, "*", 0x21), _defineProperty(_$$$$$$$$$$$, "+", 0x70), _defineProperty(_$$$$$$$$$$$, ",", 0x10), _defineProperty(_$$$$$$$$$$$, "-", 0x40), _defineProperty(_$$$$$$$$$$$, ".", 0x80), _defineProperty(_$$$$$$$$$$$, "/", 0x52), _defineProperty(_$$$$$$$$$$$, "0", 0x3f), _defineProperty(_$$$$$$$$$$$, "1", 0x06), _defineProperty(_$$$$$$$$$$$, "2", 0x5b), _defineProperty(_$$$$$$$$$$$, "3", 0x4f), _defineProperty(_$$$$$$$$$$$, "4", 0x66), _defineProperty(_$$$$$$$$$$$, "5", 0x6d), _defineProperty(_$$$$$$$$$$$, "6", 0x7d), _defineProperty(_$$$$$$$$$$$, "7", 0x07), _defineProperty(_$$$$$$$$$$$, "8", 0x7f), _defineProperty(_$$$$$$$$$$$, "9", 0x6f), _defineProperty(_$$$$$$$$$$$, ":", 0x09), _defineProperty(_$$$$$$$$$$$, ";", 0x0d), _defineProperty(_$$$$$$$$$$$, "<", 0x61), _defineProperty(_$$$$$$$$$$$, "=", 0x48), _defineProperty(_$$$$$$$$$$$, ">", 0x43), _defineProperty(_$$$$$$$$$$$, "?", 0xd3), _defineProperty(_$$$$$$$$$$$, "@", 0x5f), _defineProperty(_$$$$$$$$$$$, "A", 0x77), _defineProperty(_$$$$$$$$$$$, "B", 0x7c), _defineProperty(_$$$$$$$$$$$, "C", 0x39), _defineProperty(_$$$$$$$$$$$, "D", 0x5e), _defineProperty(_$$$$$$$$$$$, "E", 0x79), _defineProperty(_$$$$$$$$$$$, "F", 0x71), _defineProperty(_$$$$$$$$$$$, "G", 0x3d), _defineProperty(_$$$$$$$$$$$, "H", 0x76), _defineProperty(_$$$$$$$$$$$, "I", 0x30), _defineProperty(_$$$$$$$$$$$, "J", 0x1e), _defineProperty(_$$$$$$$$$$$, "K", 0x75), _defineProperty(_$$$$$$$$$$$, "L", 0x38), _defineProperty(_$$$$$$$$$$$, "M", 0x15), _defineProperty(_$$$$$$$$$$$, "N", 0x37), _defineProperty(_$$$$$$$$$$$, "O", 0x3f), _defineProperty(_$$$$$$$$$$$, "P", 0x73), _defineProperty(_$$$$$$$$$$$, "Q", 0x6b), _defineProperty(_$$$$$$$$$$$, "R", 0x33), _defineProperty(_$$$$$$$$$$$, "S", 0x6d), _defineProperty(_$$$$$$$$$$$, "T", 0x78), _defineProperty(_$$$$$$$$$$$, "U", 0x3e), _defineProperty(_$$$$$$$$$$$, "V", 0x3e), _defineProperty(_$$$$$$$$$$$, "W", 0x2a), _defineProperty(_$$$$$$$$$$$, "X", 0x76), _defineProperty(_$$$$$$$$$$$, "Y", 0x6e), _defineProperty(_$$$$$$$$$$$, "Z", 0x5b), _defineProperty(_$$$$$$$$$$$, "[", 0x39), _defineProperty(_$$$$$$$$$$$, "\\", 0x64), _defineProperty(_$$$$$$$$$$$, "]", 0x0f), _defineProperty(_$$$$$$$$$$$, "^", 0x23), _defineProperty(_$$$$$$$$$$$, "_", 0x08), _defineProperty(_$$$$$$$$$$$, "`", 0x02), _defineProperty(_$$$$$$$$$$$, "a", 0x5f), _defineProperty(_$$$$$$$$$$$, "b", 0x7c), _defineProperty(_$$$$$$$$$$$, "c", 0x58), _defineProperty(_$$$$$$$$$$$, "d", 0x5e), _defineProperty(_$$$$$$$$$$$, "e", 0x7b), _defineProperty(_$$$$$$$$$$$, "f", 0x71), _defineProperty(_$$$$$$$$$$$, "g", 0x6f), _defineProperty(_$$$$$$$$$$$, "h", 0x74), _defineProperty(_$$$$$$$$$$$, "i", 0x10), _defineProperty(_$$$$$$$$$$$, "j", 0x0c), _defineProperty(_$$$$$$$$$$$, "k", 0x75), _defineProperty(_$$$$$$$$$$$, "l", 0x30), _defineProperty(_$$$$$$$$$$$, "m", 0x14), _defineProperty(_$$$$$$$$$$$, "n", 0x54), _defineProperty(_$$$$$$$$$$$, "o", 0x5c), _defineProperty(_$$$$$$$$$$$, "p", 0x73), _defineProperty(_$$$$$$$$$$$, "q", 0x67), _defineProperty(_$$$$$$$$$$$, "r", 0x50), _defineProperty(_$$$$$$$$$$$, "s", 0x6d), _defineProperty(_$$$$$$$$$$$, "t", 0x78), _defineProperty(_$$$$$$$$$$$, "u", 0x1c), _defineProperty(_$$$$$$$$$$$, "v", 0x1c), _defineProperty(_$$$$$$$$$$$, "w", 0x14), _defineProperty(_$$$$$$$$$$$, "x", 0x76), _defineProperty(_$$$$$$$$$$$, "y", 0x6e), _defineProperty(_$$$$$$$$$$$, "z", 0x5b), _defineProperty(_$$$$$$$$$$$, "{", 0x46), _defineProperty(_$$$$$$$$$$$, "|", 0x30), _defineProperty(_$$$$$$$$$$$, "}", 0x70), _defineProperty(_$$$$$$$$$$$, "~", 0x01), _$$$$$$$$$$$);

exports["default"] = _default;
