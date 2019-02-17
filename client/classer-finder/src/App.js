import React, { Component } from 'react';
import './App.css';
import {Column, Row} from 'simple-flexbox';
import Search from './Search';
import Results from './Results';
import Schedule from './Schedule';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      query_results: [],
      ready: false
    }
  }

  handleChange = (e) => { 
    this.setState({ query: e.target.value })
    this.handleElastic();
  }

  handleElastic = async () => {
    // ASYNCH API CALL
    let query_result = []// await axios.get('localhost:8080/classes/' + this.state.query);
    console.log('hello');
    this.setState({ query_results: query_result })
    this.setState({ ready: true })

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
              {this.state.ready && <Results/>}
            </div>
          </Row>
        </Column>
        <Schedule/>
      </div>
    );
  }
}

export default App;
