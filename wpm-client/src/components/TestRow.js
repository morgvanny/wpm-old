import React from 'react';

const TestRow = ({ test }) => (
  <div key={test.id}>
    <p>Team: {test.team} - 
    WPM: {test.wpm} - 
    Length: {test.length} characters</p>
  </div>
)

export default TestRow;
