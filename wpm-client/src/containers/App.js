import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Tests from './Tests'
import TestForm from './TestForm'
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={TestForm} />
          <Route exact path="/scoreboard" component={Tests} />
        </div>
      </Router>
    );
  }
}

export default App;