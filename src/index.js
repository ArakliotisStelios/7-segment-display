import React from "react";
import PropTypes from "prop-types";
import segments from "./lib/7segment";

/**
 *
 * @param character to display, if there will be more that one, display will fallback to E
 * @param style styles passed to SVG
 * @param ledColorOff color of the active segments
 * @param ledColorOn color of the incactive segments
 * @param ledBorder border color
 */
const SevenSegmentDisplay = ({ character, style, ledColorOff, ledColorOn, ledBorder }) => {
    const byteQuery = (int, i) => {
        return int & (1 << i);
    };
    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" width="192px" height="320px" viewBox="-1 -1 12 20">
            <g
                id="abcdefg"
                style={{
                    fillRule: "evenodd",
                    stroke: `${ledBorder}`,
                    strokeWidth: "0.25",
                    strokeOpacity: "1",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                }}
            >
                <polygon
                    id="a"
                    points=" 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2"
                    fill={byteQuery(segments[character], 0) ? ledColorOn : ledColorOff}
                />
                <polygon
                    id="b"
                    points=" 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2"
                    fill={byteQuery(segments[character], 1) ? ledColorOn : ledColorOff}
                />
                <polygon
                    id="c"
                    points=" 9, 9 10,10 10,16  9,17  8,16  8,10"
                    fill={byteQuery(segments[character], 2) ? ledColorOn : ledColorOff}
                />
                <polygon
                    id="d"
                    points=" 9,17  8,18  2,18  1,17  2,16  8,16"
                    fill={byteQuery(segments[character], 3) ? ledColorOn : ledColorOff}
                />
                <polygon
                    id="e"
                    points=" 1,17  0,16  0,10  1, 9  2,10  2,16"
                    fill={byteQuery(segments[character], 4) ? ledColorOn : ledColorOff}
                />
                <polygon
                    id="f"
                    points=" 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8"
                    fill={byteQuery(segments[character], 5) ? ledColorOn : ledColorOff}
                />
                <polygon
                    id="g"
                    points=" 1, 9  2, 8  8, 8  9, 9  8,10  2,10"
                    fill={byteQuery(segments[character], 6) ? ledColorOn : ledColorOff}
                />
            </g>
        </svg>
    );
};

SevenSegmentDisplay.defaultProps = {
    character: 0,
    ledColorOff: "transparent",
    ledColorOn: "red",
    ledBorder: "black",
};

SevenSegmentDisplay.propTypes = {
    character: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    ledColorOff: PropTypes.string,
    ledColorOn: PropTypes.string,
    ledBorder: PropTypes.string,
};

export default SevenSegmentDisplay;
