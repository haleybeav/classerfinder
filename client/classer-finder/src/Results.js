import React from 'react';
import './Results.css';
import {Column,  Row} from 'simple-flexbox';


const getDays = (course) => {
    let s = ''
    if (course.time.M !== null) { s += 'M'}
    if (course.time.T !== null) { s += 'T'}
    if (course.time.W !== null) { s += 'W'}
    if (course.time.R !== null) { s += 'R'}
    if (course.time.F !== null) { s += 'F'}
    return s;
}

const getTime = (course) => {
    let s = '';
         if (course.time.M !== null) { s += course.time.M[0] + '-' + course.time.M[1]} 
    else if (course.time.T !== null) { s += course.time.T[0] + '-' + course.time.T[1]}
    else if (course.time.W !== null) { s += course.time.W[0] + '-' + course.time.W[1]}
    else if (course.time.R !== null) { s += course.time.R[0] + '-' + course.time.R[1]}
    else if (course.time.F !== null) { s += course.time.F[0] + '-' + course.time.F[1]}
    else { s = 'TBD'}

    return s;
}

const Results = ({courses, addClass}) => {
    return (
        <div className='resultTable'>
            { courses.map( (course) =>
                <div className='result-box' key={course.crn}>
                    <div className='result-items'>
                        <Column horizontal='start' vertical='start'>
                            <Row>
                                <h1>{course.title}</h1>
                                <p>3cr</p>    
                            </Row>
                            <p>{course.instructor}</p>
                            <Row>
                                <p><b>{getDays(course)} {getTime(course)} {course.location}</b></p>
                            </Row>
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