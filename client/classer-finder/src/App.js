import React, { Component } from 'react';
import './App.css';
import {Column, Row} from 'simple-flexbox';
import Search from './Search';
import Results from './Results';
import Schedule from './Schedule/Schedule';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      query_results: [],
      selected_courses: []
    }
  }

  handleChange = (e) => { 
    this.setState({ query: e.target.value })
    this.handleElastic(e.target.value);
  }

  handleElastic = async (value) => {
    if(value){
      let query_result = await axios.get('http://localhost:8080/classes/' + value);      
      this.setState({ query_results: query_result.data })
    } else {
      this.setState({ query_results: [] })
    }
  }

  addClass = (course) => {
    if (this.state.selected_courses.indexOf(course) === -1) {
      this.setState({ selected_courses: [...this.state.selected_courses, course] })
    }
  }

  render() {
    return (
      <div>
        <Column vertical = 'center' horizontal = 'center'>
          <Row horizontal = 'center' vertical = 'center'>
            <div>
              <div>
                <Column horizontal = 'center'>
                  <h1>WWU ClasserFinder</h1>
                </Column>
              </div>
              <Search handleChange={this.handleChange}/>
              
            </div>
          </Row>
        </Column>
        <Results courses={this.state.query_results} addClass={this.addClass}/>
        <Schedule courses={this.state.selected_courses}/>
      </div>
    );
  }
}

export default App;
