import React, { Component } from 'react';
import './App.css';
import {Column, Row} from 'simple-flexbox';
import Search from './Search';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleChange = (e) => { 
    this.setState({ query: e.target.value })
  }

  handleElastic = () => {}

  render() {
    return (
      <Column vertical = 'center' horizontal = 'center'>
        <Row horizontal = 'center' vertical = 'center'>
          <div>
            <div>
              <Column horizontal = 'center'>
                <h1>WWU ClasserFinder</h1>
              </Column>
            </div>
            <Search query={this.state.query} handleChange={this.handleChange}/>
          </div>
        </Row>
      </Column>
    );
  }
}

export default App;
