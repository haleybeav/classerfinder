import React from 'react';
import search_icon from './icons/search3.png';
import {Row} from 'simple-flexbox';
import './Search.css'

const Search = ({handleChange}) => {
    return (
        <div className='flex-search'>
            <Row horizontal = 'center' vertical = 'center'>
                <input className='search-bar' type='text' onChange={ (e) => handleChange(e) }></input>
            </Row>
            <img className='search-icon' src={search_icon} alt='magnifying glass'></img>
        </div>
    );
}

export default Search;