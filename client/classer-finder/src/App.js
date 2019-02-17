import React, { Component } from 'react';
import './App.css';
import {Column, Row} from 'simple-flexbox';
import Search from './Search';
import Results from './Results';
import Schedule from './Schedule';


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
  }

  handleElastic = () => {
    // ASYNCH API CALL
    //let query_result = await APICALL();
    this.setState({ query_results: [] })
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
