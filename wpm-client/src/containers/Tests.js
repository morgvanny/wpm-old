import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestRow from '../components/TestRow';
import { getTests } from '../actions/tests';

const API_URL = process.env.REACT_APP_API_URL;


class Tests extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      likes: [0,0,0,0,0,0,0,0,0,0]
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

  onClick(i) {
    let tmp = this.state.likes;
    tmp[i] += 1;
    this.setState({ likes: tmp })
  }

  render() {
    return (
      <div>
        <button onClick={this.callApi}>Call Api</button>
        <h1>Top 10 Results</h1>
        {this.props.tests.slice(0,10).map((test, i) => <TestRow key={test.id} test={test} likes={this.state.likes[i]} onClick={() => this.onClick(i)}/> )}
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