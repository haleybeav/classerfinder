import React from 'react';
import './Schedule.css'

const Schedule = () => {
    return (
        <div className='schedule-bar'>
            <div>
            <table className='schedule-table'>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
            </div>
            <div className='schedule-classes'>
                <h1>Class1</h1>
            </div>
        </div>
    );
}

export default Schedule;