import React from 'react';

const Tests = (props) => (
  <div>
    <h1>Tests</h1>
    {props.tests.map(test => 
      <div key={test.id}>
        <h3>Team: {test.team}</h3>
        <p>WPM: {test.wpm}</p>
        <p>Length: {test.length} characters</p>
      </div>
    )}
  </div>
);

export default Tests;