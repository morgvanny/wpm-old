import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestRow from '../components/TestRow';
import TestForm from './TestForm';
import { getTests } from '../actions/tests';

class Tests extends Component {

  componentDidMount() {
    this.props.getTests()
  }

  render() {
    return (
      <div>
        <h1>Tests</h1>
        {this.props.tests.map(test => <TestRow key={test.id} test={test} /> )}
        <TestForm />
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