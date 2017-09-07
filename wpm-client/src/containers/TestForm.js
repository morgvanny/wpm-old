import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTestFormData } from '../actions/testForm';
import { createTest } from '../actions/tests';
import './TestForm.css'
import { samples } from '../samples'

class TestForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: undefined,
      sampleText: "",
      correct: true,
      result: ""
    };
  }

  componentWillMount() {
    const initialFormData = {team: "", wpm: "", length: "", words: ""}
    this.props.updateTestFormData(initialFormData)
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentTestFormData = Object.assign({}, this.props.testFormData, {
      [name]: value
    })
    this.props.updateTestFormData(currentTestFormData)
    let samplePart = this.state.sampleText.substring(0, currentTestFormData.words.length);
    if (((currentTestFormData.words !== samplePart) || samplePart.length > currentTestFormData.words.length) && this.state.correct) {
      this.setState({
        correct: false
      })
    } else if (!this.state.correct && currentTestFormData.words === samplePart) {
      this.setState({
        correct: true
      })
    }
  }

  wordsPerMinute = () => {
    const wordsTyped = this.props.testFormData.words.length/5
    const finishedDate = new Date(Date.now());
    const minutesTaken = (finishedDate - this.state.date)/1000/60
    return Math.round(wordsTyped/minutesTaken);
  }

  handleOnSubmit = event => {
    event.preventDefault()
    if (this.props.testFormData.words !== this.state.sampleText) {
      console.log("doesn't match")
    } else {
      this.props.testFormData.wpm = this.wordsPerMinute()
      this.props.testFormData.length = this.props.testFormData.words.length
      delete this.props.testFormData.words
      this.setState({
        result: "You typed " + this.props.testFormData.length + " characters at " + this.props.testFormData.wpm + " wpm!"
      })
      this.props.createTest(this.props.testFormData)
      delete this.props.testFormData.team
    }
  }

  startTest = text => {
    const currentTestFormData = Object.assign({}, this.props.testFormData, {
      'team': text
    })
    this.props.updateTestFormData(currentTestFormData)
    this.setState({
      date: new Date(Date.now()),
      sampleText: samples[Math.floor(Math.random() * samples.length)]
    })
    this.refs.btnRed.setAttribute("disabled", "disabled");
    this.refs.btnBlue.setAttribute("disabled", "disabled");
    if (text === "Red") {
      this.refs.btnRed.setAttribute("class", "picked");
      this.refs.btnBlue.setAttribute("class", "notPicked");
    } else {
      this.refs.btnBlue.setAttribute("class", "picked");
      this.refs.btnRed.setAttribute("class", "notPicked");
    }
  }

  check = () => {
    return (this.state.correct ? "correct" : "incorrect")
  } 

  render() {
    const { words, team } = this.props.testFormData;

    let input = null;
    let sample = null;
    if ({team}.team !== "") {
      input = <div><div><h4>Type as quickly as you can for team {team}!</h4></div><textarea rows="6" autoFocus className={this.check()} onChange={this.handleOnChange} name="words" value={words}/><br/><button type="submit">Submit</button></div>;
      sample = <div className="sample"><p>{this.state.sampleText}</p></div>
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
        <div>
          <p>{this.state.result}</p>
        </div>
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