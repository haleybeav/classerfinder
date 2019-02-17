import React from 'react';
import './Results.css';
import {Column,  Row} from 'simple-flexbox';

const Results = ({courses, addClass, getDays, getTime}) => {
    

    return (
        <div className='resultTable'>
            { courses.map( (course) =>
                <div className='result-box' key={course.crn}>
                    <div className='result-items'>
                        <Column horizontal='start' vertical='start'>
                            <Row>
                                <h1>{course.title}</h1>
                                   
                            </Row>
                            <p>{course.instructor}</p>
                            <Row>
                                <p><b>MTF 3:00-3:50pm {course.location}</b></p>
                            </Row>
                        </Column>
                    </div>
                    <div className='result-items'>
                    <Column horizontal='center' vertical='center'>
                        <h3 >3cr</h3>
                        <p>GUR: ACOM</p>
                        <p>Prereq: </p>
                        <p>Additional Charges: </p> 
                    </Column>
                    </div>
                    <div className='result-items'>
                        <Column horizontal='end' vertical='end'>
                            <h2>{course.dept} {course.course}</h2>
                            <h3>{course.crn}</h3>
                            <button type='button' onClick={ (e) => addClass(course) }>Add Class</button>
                        </Column>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Results;