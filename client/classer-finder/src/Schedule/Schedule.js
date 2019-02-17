import React from 'react';
import './Schedule.css'
import Day from './Day/Day';
import mockdata from './mockdata';


const Schedule = () => {
    return (
        <div> 
            <div className='schedule-bar'>
                <Day day="M" data={mockdata} />
                <Day day="T" data={mockdata} />
                <Day day="W" data={mockdata} />
                <Day day="R" data={mockdata} />
                <Day day="F" data={mockdata} />            
            </div>
            <div>
                O_O

            </div>
        </div>        
    );
}

export default Schedule;