import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestRow from '../components/TestRow';
import { getTests } from '../actions/tests';
import { updateTest } from '../actions/tests';

const API_URL = process.env.REACT_APP_API_URL;


class Tests extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getTests()
  }

  callApi = () => {
    console.log('a')
    fetch(`${API_URL}/tests`)
      .then(response => {
        console.log('b')
        return response.json()
      })
      .then(tests => console.log('c', tests))
    console.log('d')
  }

  onClick(test) {
    const updateData = {id: test.id, team: test.team, wpm: test.wpm, length: test.length, likes: test.likes + 1}
    this.props.updateTest(updateData)
  }

  sortTests = () => {
    let topWpm = this.props.tests.slice(0,10)
    return (topWpm.sort(function(a,b) {
      return b.likes - a.likes;
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.callApi}>Call Api</button>
        <h1>Top 10 Results</h1>
        {this.sortTests().map((test) => <TestRow key={test.id} test={test} likes={test.likes} onClick={() => this.onClick(test)}/> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    tests: state.tests
  })
}

export default connect(mapStateToProps, { getTests, updateTest })(Tests);