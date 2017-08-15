import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTestFormData } from '../actions/testForm';
import { createTest } from '../actions/tests';

class TestForm extends Component {

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


  render() {
    const { team, wpm, length } = this.props.testFormData;

    return (
      <div>
        Take the test
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="team">Team:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="team"
            value={team}
          />
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