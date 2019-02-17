import React from 'react';
import './Schedule.css'
import Day from './Day/Day';

const Schedule = ({courses}) => {
    return (
        <div> 
            <div className='schedule-bar'>
                <Day day="M" data={courses} />
                <Day day="T" data={courses} />
                <Day day="W" data={courses} />
                <Day day="R" data={courses} />
                <Day day="F" data={courses} />            
            </div>
            <div>
                O_O

            </div>
        </div>        
    );
}

export default Schedule;