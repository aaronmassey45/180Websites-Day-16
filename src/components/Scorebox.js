import React, { Component } from 'react';

export default class Scorebox extends Component {
  render() {
    return (
      <div className="Scorebox">
        <div className="well">
          Question {this.props.current} out of {this.props.questions.length} <span className="pull-right"><b>Score: {this.props.score}</b></span>
        </div>
      </div>
    );
  }
}
