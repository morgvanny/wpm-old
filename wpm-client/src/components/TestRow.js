import React, { Component } from 'react';

export default class TestRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleOnClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div key={this.props.test.id}>
      <p>Team: {this.props.test.team} - 
      WPM: {this.props.test.wpm} - 
      Length: {this.props.test.length} characters - 
      <button onClick={ this.handleOnClick }>Like</button> - 
      Likes: {this.state.likes}
      </p>
    </div>
    )
  }
}