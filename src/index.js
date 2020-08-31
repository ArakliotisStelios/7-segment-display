import React ,{useEffect} from 'react';

const SevenSegmentDisplay = ({number})=>{
    const zero  = ["a","b","c","d","e","f"];
    const one   = ["b","c"];
    const two   = ["a","b","d","e","g"];
    const three = ["a","b","c","d","g"];
    const four  = ["b","c","e","f"];
    const five  = ["a","c","d","f","g"];
    const six   = ["a","c","d","e","f","g"];
    const seven = ["a","b","c"];
    const eight = ["a","b","c","d","e","f","g"];
    const nine =  ["a","b","c","d","f","g"];
    const ledColor = "transparent";

    const calculateLeds =(num)=> {
        eight.filter(x => num.includes(x)).forEach(letter => {
            document.getElementById(letter).style.fill = "red"
        });
    }
    useEffect(() => {
        number ? calculateLeds(number): null
    }, [number]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="192px" height="320px" viewBox="-1 -1 12 20">
            <g id="abcdefg" style={{fillRule:'evenodd',stroke:"transparent", strokeWidth:"0.25", strokeOpacity:"1", strokeLinecap:"butt", strokeLinejoin:"miter"}}>
                <polygon id="a" points=" 1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" fill={ledColor}/>
                <polygon id="b" points=" 9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" fill={ledColor}/>
                <polygon id="c" points=" 9, 9 10,10 10,16  9,17  8,16  8,10" fill={ledColor}/>
                <polygon id="d" points=" 9,17  8,18  2,18  1,17  2,16  8,16" fill={ledColor}/>
                <polygon id="e" points=" 1,17  0,16  0,10  1, 9  2,10  2,16" fill={ledColor}/>
                <polygon id="f" points=" 1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" fill={ledColor}/>
                <polygon id="g" points=" 1, 9  2, 8  8, 8  9, 9  8,10  2,10" fill={ledColor}/>
            </g>
        </svg>
    )
}

export default SevenSegmentDisplay;
