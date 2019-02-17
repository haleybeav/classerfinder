import React from 'react';
import './Schedule.css'
import Day from './Day/Day';
import mockdata from './mockdata';
import {CLASSCOLOR} from './Colors';







const Schedule = ({classes, preview}) => {

    let i = -1;
    let classlist =  mockdata.map((course)=>{
        i = i + 1;
        let style={  "backgroundColor": CLASSCOLOR[i], }
        return (    <div> <div className="dot" style={style}></div> { course.title} </div>)
    });
    return (
            <div className='schedule-bar'>                
                    <Day day="M" data={mockdata} />
                    <Day day="T" data={mockdata} />
                    <Day day="W" data={mockdata} />
                    <Day day="R" data={mockdata} />
                    <Day day="F" data={mockdata} />            
                <div className="class-list">
                 {classlist}
                </div>
            </div>    
    );
}

export default Schedule;