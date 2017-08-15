import React, { Component } from 'react';
import Tests from './Tests'
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tests: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/tests`)
      .then(response => response.json())
      .then(tests => this.setState({ tests }))
  }
  render() {
    return (
      <div className="App">
        <Tests tests={this.state.tests} />
      </div>
    );
  }
}

export default App;