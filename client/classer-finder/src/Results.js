import React from 'react';
import './Results.css';
import {Column} from 'simple-flexbox';

const Results = ({courses}) => {
    return (
        <div className='resultTable'>
            { courses.map( (course) =>
                <div className='result-box'>
                    <div className='result-items'>
                        <Column horizontal='start' vertical='start'>
                            <h1>{course.title}</h1>
                            <p>{course.instructor}</p>
                            <p><b>MTF 3:00-3:50pm {course.location}</b></p>
                        </Column>
                    </div>
                    <div className='result-items'>
                        <Column horizontal='end' vertical='end'>
                            <h2>{course.dept} {course.course}</h2>
                            <h3>{course.crn}</h3>
                            <button type='button'>Add Class</button>
                        </Column>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Results;