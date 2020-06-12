import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Tests from './Tests'
import Stats from './Stats'
import TestForm from './TestForm'
import NavBar from '../components/NavBar'
import SignIn from '../components/SignIn'

function App() {

  const [signedIn, setSignedIn] = useState();
  return (
    <Router>
      <div className="App">
        <NavBar />
        { !signedIn ? <SignIn signedIn={ signedIn } setSignedIn={ setSignedIn } /> :
          <Route exact path="/" component={ TestForm } />
        }
        <Route exact path="/leaderboard" component={ Tests } />
        <Route exact path="/stats" component={ Stats } />
      </div>
    </Router>
  );
}

export default App;
