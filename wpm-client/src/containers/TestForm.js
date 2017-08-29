import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTestFormData } from '../actions/testForm';
import { createTest } from '../actions/tests';
import { samples } from '../samples'

class TestForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: undefined,
      sampleText: ""
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentTestFormData = Object.assign({}, this.props.testFormData, {
      [name]: value
    })
    this.props.updateTestFormData(currentTestFormData)
  }

  wordsPerMinute = () => {
    const wordsTyped = this.props.testFormData.words.length/5
    const finishedDate = new Date(Date.now());
    const minutesTaken = (finishedDate - this.state.date)/1000/60
    return wordsTyped/minutesTaken
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.testFormData.wpm = this.wordsPerMinute()
    this.props.testFormData.length = this.props.testFormData.words.length
    delete this.props.testFormData.words
    this.props.createTest(this.props.testFormData)
  }

  startTest = text => {
    this.props.testFormData.team = text
    this.setState({
      date: new Date(Date.now()),
      sampleText: samples[Math.floor(Math.random() * samples.length)]
    })
    this.refs.btnRed.setAttribute("disabled", "disabled");
    this.refs.btnBlue.setAttribute("disabled", "disabled")
  }

  render() {
    const { words, team } = this.props.testFormData;

    let input = null;
    let sample = null;
    if ({team}.team !== "") {
      input = <div><div><h4>Type as quickly as you can for team {team}!</h4></div><input autoFocus type="text" onChange={this.handleOnChange} name="words" value={words}/><button type="submit">Submit</button></div>;
      sample = <div><p>{this.state.sampleText}</p></div>
    }
    return (
      <div>
        <h1>Choose your team to start the test!</h1>
        <div>
          <button
            ref="btnRed"
            onClick={this.startTest.bind(this, "Red")}
            id="Red"
          >
            Red
          </button>
          <button
            ref="btnBlue"
            onClick={this.startTest.bind(this, "Blue")}
            id="Blue"
          >
            Blue
          </button>
        </div>
        {sample}
        <form onSubmit={this.handleOnSubmit}>
          {input}
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