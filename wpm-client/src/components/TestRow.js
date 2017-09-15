import React from 'react';

const TestRow = ({ test, likes, click }) => (
  <div key={test.id}>
    <p>Team: {test.team} - 
    WPM: {test.wpm} - 
    Length: {test.length} characters - 
    <button onClick={ click }>Like</button> - 
    Likes: {likes}
    </p>
  </div>
)

export default TestRow;
