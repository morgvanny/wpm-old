import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestRow from '../components/TestRow';
import { getTests } from '../actions/tests';

class Tests extends Component {

  componentDidMount() {
    this.props.getTests()
  }

  render() {
    return (
      <div>
        <h1>Top 10 Results</h1>
        {this.props.tests.slice(0,10).map(test => <TestRow key={test.id} test={test} /> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    tests: state.tests
  })
}

export default connect(mapStateToProps, { getTests })(Tests);