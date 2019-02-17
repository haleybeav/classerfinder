import React from 'react';
import './Day.css'
import {CLASSCOLOR} from '../Colors';
const DAYHEIGHT = 300;
const STARTTIME = 8;
const ENDTIME = 18;
// 8 to 18


const DAYNAME = {
    "M": "Monday",
    "T": "Tuesday",
    "W": "Wednesday",
    "R": "Thursday",
    "F": "Friday"
}

const getIntFromString = (str)=>{
    let time = str.split(":");
    let intTime = parseInt(time[0]);
    intTime = intTime + parseInt(time[1])/60;
    return intTime;
}

const getPixelsStartFromTime = (time)=>{
    return (time - STARTTIME) * (DAYHEIGHT /(ENDTIME - STARTTIME));    
}


const getPixelsSizeFromTime = (sTime, eTime)=>{
    return (eTime - sTime) * (DAYHEIGHT /(ENDTIME - STARTTIME));
}

const Day = ({day, data}) => {

    var classBlocks = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].time[day]){

            let sTime = getIntFromString(data[i].time[day][0]);
            let eTime = getIntFromString(data[i].time[day][1]);

            let style = {
                "top": getPixelsStartFromTime(sTime),
                "height": getPixelsSizeFromTime(sTime, eTime),
                "backgroundColor": CLASSCOLOR[i],
                "width": "100%",
                "position": "absolute",
                "borderRadius": "4px",
                "margin": "2px",
                "opacity": ".75"    
            };
    
            classBlocks.push(<div className='class' style={style} key={i}></div>);
        }        
    }
    return (
        <div className='day-bar'>
            {DAYNAME[day]}

            {classBlocks}
        </div>
    );
}

export default Day;