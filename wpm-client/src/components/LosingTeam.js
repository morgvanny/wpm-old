import React from 'react';

const LosingTeam = (props) => (
  <div>
    <h2>Team {props.team} is losing with an average of only {props.wpm} wpm.</h2>
  </div>
)

export default LosingTeam;