import React from 'react';
import './Day.css'
import {CLASSCOLOR} from '../Colors';
import {courseInList} from '../../CourseHelpers';
const offset = 20;
const DAYHEIGHT = 290;
const STARTTIME = 8;
const ENDTIME = 18;
const PREVIEWCOLOR = "#FE1065"
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
    return (time - STARTTIME) * (DAYHEIGHT /(ENDTIME - STARTTIME)) + offset;    
}


const getPixelsSizeFromTime = (sTime, eTime)=>{
    return (eTime - sTime) * (DAYHEIGHT /(ENDTIME - STARTTIME));
}


const Course=({course, day, color, opacity})=>{

    let sTime = getIntFromString(course.time[day][0]);
    let eTime = getIntFromString(course.time[day][1]);

    if (!opacity){
        opacity = ".75" 
    }

    let style = {
        "top": getPixelsStartFromTime(sTime),
        "height": getPixelsSizeFromTime(sTime, eTime),
        "backgroundColor": color,
        "width": "100%",
        "position": "absolute",
        "borderRadius": "4px",
        "margin": "2px",
        "opacity": opacity,
        "color": "white",
        "font-weight": "bold"
    };

    return(<div className='class' style={style} >{course.title}</div>);

}

const Day = ({day, data, preview}) => {

    var classBlocks = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].time[day]){
            classBlocks.push(<Course key={data[i].crn} course={data[i]} color={CLASSCOLOR[i]} day={day} />);
        }        
    }

    if(preview && preview.time[day] && !preview.time.tba && !courseInList(preview.crn, data)){
        classBlocks.push(<Course key={preview.crn} opacity="0.6" course={preview} color={PREVIEWCOLOR} day={day} />);
    }
    
    return (
        <div className='day-bar'>
            {DAYNAME[day]}

            {classBlocks}
        </div>
    );
}

export default Day;