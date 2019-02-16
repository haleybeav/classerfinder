import React, { Component } from 'react';
import './App.css';
import {Column, Row} from 'simple-flexbox';
import search_icon from './icons/search3.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <Column vertical = 'center' horizontal = 'center'>
        <Row horizontal = 'center' vertical = 'center'>
          <div>
              <Column horizontal = 'center'>
                <h1>WWU ClasserFinder</h1>
              </Column>
            <div className='flex-search'>
              <Row horizontal = 'center' vertical = 'center'>
                <input className='search-bar' type='text' onChange={ (e) => this.setState({ query: e.target.value })}></input>
              </Row>
              <img className='search-icon' src={search_icon} alt='magnifying glass'></img>
            </div>
          </div>
        </Row>
      </Column>
    );
  }
}

export default App;
