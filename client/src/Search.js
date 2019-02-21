import React from 'react';
import search_icon from './icons/search3.png';
import {Row} from 'simple-flexbox';
import './Search.css'

const Search = ({handleChange}) => {
    let placeholder = 'e.g. Perry Fizzano, Computer Science, CRN etc.';

    return (
        <div>
        <h1 className="t-center">WWU ClasserFinder</h1>   
        <div className='flex-search'>
            <Row horizontal = 'center' vertical = 'center'>
                <input className='search-bar' type='text' placeholder={placeholder} onChange={ (e) => handleChange(e) }></input>
            </Row>
            <img className='search-icon' src={search_icon} alt='magnifying glass'></img>
        </div>
        </div>
    );
}

export default Search;