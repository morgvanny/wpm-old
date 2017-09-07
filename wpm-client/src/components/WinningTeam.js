import React from 'react';

const WinningTeam = (props) => (
  <div>
    <h1>Team {props.team} is winning, with an average of {props.wpm} wpm!</h1>
  </div>
)

export default WinningTeam;