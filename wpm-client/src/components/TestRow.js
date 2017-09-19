import React from 'react';

const TestRow = ({ test, likes, onClick }) => (
  <div key={test.id}>
    <p>Team: {test.team} - 
    WPM: {test.wpm} - 
    Length: {test.length} characters - 
    <button onClick={ onClick }>Like</button> - 
    Likes: {likes}
    </p>
  </div>
)

export default TestRow;
