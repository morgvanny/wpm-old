import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTests } from '../actions/tests';
import WinningTeam from '../components/WinningTeam';
import LosingTeam from '../components/LosingTeam';
import Averages from '../components/Averages';

class Stats extends Component {

  componentDidMount() {
    this.props.getTests()
  }

  render() {
    return (
      <div>
        <WinningTeam team={this.props.winning.team} wpm={this.props.winning.wpm}/>
        <LosingTeam team={this.props.losing.team} wpm={this.props.losing.wpm}/>
        <Averages wpm={this.props.average.wpm}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let redWpmSum = 0
  let teamRed = state.tests.filter(test => test.team === "Red")
  teamRed.forEach(function(test){
   redWpmSum += test.wpm
  })
  const redWpmAvg = +(redWpmSum/teamRed.length).toFixed(2)

  let blueWpmSum = 0
  let teamBlue = state.tests.filter(test => test.team === "Blue")
  teamBlue.forEach(function(test){
   blueWpmSum += test.wpm
  })
  const blueWpmAvg = +(blueWpmSum/teamBlue.length).toFixed(2)

  const winningTeam = {
    team: isNaN(redWpmAvg) ? "????" : (redWpmAvg > blueWpmAvg ? "Red" : "Blue"),
    wpm: isNaN(redWpmAvg) ? "????" : (redWpmAvg > blueWpmAvg ? redWpmAvg : blueWpmAvg),
  }
  
  const losingTeam = {
    team: isNaN(redWpmAvg) ? "????" : (redWpmAvg > blueWpmAvg ? "Blue" : "Red"),
    wpm: isNaN(redWpmAvg) ? "????" : (redWpmAvg > blueWpmAvg ? blueWpmAvg : redWpmAvg),
  }

  const averageWpm = ((redWpmSum + blueWpmSum)/(teamRed.length + teamBlue.length)).toFixed(2)

  return ({
    tests: state.tests,
    winning: winningTeam,
    losing: losingTeam,
    average: {
      wpm: isNaN(redWpmAvg) ? "????" : averageWpm
    }
  })
}

export default connect(mapStateToProps, { getTests })(Stats);