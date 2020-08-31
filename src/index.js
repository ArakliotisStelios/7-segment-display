import React ,{useEffect,useRef,createRef} from 'react';
import PropTypes from "prop-types"
const SevenSegmentDisplay = ({number,style})=>{
    const sevenSegmentObj={
        "0":["a","b","c","d","e","f"],
        "1":["b","c"],
        "2":["a","b","d","e","g"],
        "3":["a","b","c","d","g"],
        "4":["b","c","f","g"],
        "5":["a","c","d","f","g"],
        "6":["a","c","d","e","f","g"],
        "7":["a","b","c"],
        "8":["a","b","c","d","e","f","g"],
        "9":["a","b","c","d","f","g"],
        "invalid":["g"]
    }
    const ledColor = "transparent";
    const elementsRef = useRef(sevenSegmentObj[8].map(() => createRef()));

    const refreshSegments =()=> {
        elementsRef.current.forEach(polygon=>{
            polygon.current.style.fill=ledColor
        })
    }
    const calculateLeds =(num)=> {
        sevenSegmentObj[8].filter(x => sevenSegmentObj[num].includes(x)).forEach(letter => {
            elementsRef.current.forEach(polygon=>{
                if(polygon.current.id === letter){
                    polygon.current.style.fill="red"
                }
            })
        });
    }
    useEffect(() => {
        refreshSegments()
        number > -1 ? calculateLeds(number): calculateLeds("invalid")
    }, [number]);

    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" width="192px" height="320px" viewBox="-1 -1 12 20">
            <g id="abcdefg" style={{fillRule:'evenodd',stroke:"black", strokeWidth:"0.25", strokeOpacity:"1", strokeLinecap:"butt", strokeLinejoin:"miter"}}>
                <polygon ref={elementsRef.current[0]} id="a" points=" 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" fill={ledColor}/>
                <polygon ref={elementsRef.current[1]} id="b" points=" 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" fill={ledColor}/>
                <polygon ref={elementsRef.current[2]} id="c" points=" 9, 9 10,10 10,16  9,17  8,16  8,10" fill={ledColor}/>
                <polygon ref={elementsRef.current[3]} id="d" points=" 9,17  8,18  2,18  1,17  2,16  8,16" fill={ledColor}/>
                <polygon ref={elementsRef.current[4]} id="e" points=" 1,17  0,16  0,10  1, 9  2,10  2,16" fill={ledColor}/>
                <polygon ref={elementsRef.current[5]} id="f" points=" 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" fill={ledColor}/>
                <polygon ref={elementsRef.current[6]} id="g" points=" 1, 9  2, 8  8, 8  9, 9  8,10  2,10" fill={ledColor}/>
            </g>
        </svg>
    )
}


SevenSegmentDisplay.defaultProps = {
    number: 0,
};

SevenSegmentDisplay.propTypes = {
    number: PropTypes.number,
};

export default SevenSegmentDisplay;
