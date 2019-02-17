import React from 'react';
import './Schedule.css'
import Day from './Day/Day';
import {CLASSCOLOR} from './Colors';

function myFunction(crn) {
    let copyText = document.getElementById(crn);
    copyText.select();
    document.execCommand("copy");
}


const Schedule = ({courses, removeCourse, courseToPreview}) => {

    let i = -1;
    let classlist = courses.map((course)=>{
        i = i + 1;
        let style={  "backgroundColor": CLASSCOLOR[i], }
        return (    
        <div key={course.crn} class="course-record"> 
            <button className="copy-button" style={style} onClick={()=>{myFunction(course.crn)}} >Copy CRN</button> 
            
            <div className="title"> { course.title} </div> 
            <input readOnly value={course.crn} id={course.crn} className="crn" />
            <button className="remove-button" onClick={()=>{removeCourse(course)}} >X</button> 
        </div>)
    });
    return (
        
            <div className='schedule-bar'>
                <div className="times"> 
                    <div>8am</div>                     
                    <div>12pm</div>                    
                    <div>6pm</div> 
                </div>
                <div className="day-group">
                <Day day="M" data={courses} preview={courseToPreview} />
                <Day day="T" data={courses} preview={courseToPreview}  />
                <Day day="W" data={courses} preview={courseToPreview}  />
                <Day day="R" data={courses} preview={courseToPreview} />
                <Day day="F" data={courses} preview={courseToPreview} />            
                </div>
                
                <div className="vLine" />
                <div className="class-list">
                    <h3> Selected Classes </h3>
                        {classlist}
                </div>
            </div>
                    
    );
}

export default Schedule;