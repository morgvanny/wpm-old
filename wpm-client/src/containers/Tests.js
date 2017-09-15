import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestRow from '../components/TestRow';
import { getTests } from '../actions/tests';

const API_URL = process.env.REACT_APP_API_URL;


class Tests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    };
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

  handleOnClick = () => {
    console.log("ran")
    this.setState({
      likes: ++this.state.likes
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.callApi}>Call Api</button>
        <h1>Top 10 Results</h1>
        {this.props.tests.slice(0,10).map(test => <TestRow key={test.id} test={test} likes={this.state.likes} click={this.handleOnClick}/> )}
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