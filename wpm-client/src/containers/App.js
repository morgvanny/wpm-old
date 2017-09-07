import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Tests from './Tests'
import Stats from './Stats'
import TestForm from './TestForm'
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={TestForm} />
          <Route exact path="/leaderboard" component={Tests} />
          <Route exact path="/stats" component={Stats} />
        </div>
      </Router>
    );
  }
}

export default App;