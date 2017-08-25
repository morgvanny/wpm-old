import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTestFormData } from '../actions/testForm';
import { createTest } from '../actions/tests';

class TestForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: undefined
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentTestFormData = Object.assign({}, this.props.testFormData, {
      [name]: value
    })
    this.props.updateTestFormData(currentTestFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createTest(this.props.testFormData)
  }

  startTest = text => {
    console.log(text)
    this.props.testFormData.team = text
    this.setState({
      date: new Date(Date.now())
    })
    console.log(this.props.testFormData)
    console.log(this.state.date)
  }

  render() {
    const { team, wpm, length } = this.props.testFormData;

    return (
      <div>
        <h1>Choose your team, to start the test!</h1>
        <div>
          <button 
            onClick={this.startTest.bind(this, "Red")}
            id="Red"
          >
            Red
          </button>
          <button 
            onClick={this.startTest.bind(this, "Blue")}
            id="Blue"
          >
            Blue
          </button>
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="wpm"> wpm:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="wpm"
            value={wpm}
          />
          <label htmlFor="length"> length:</label>
          <input
            type="number"
            onChange={this.handleOnChange}
            name="length"
            value={length}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    testFormData: state.testFormData
  }
}

export default connect(mapStateToProps, { updateTestFormData, createTest })(TestForm);