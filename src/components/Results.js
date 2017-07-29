import React, { Component } from 'react';

export default class Results extends Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = "Awesome Job";
    } else if (percent < 80 && percent > 60) {
      message = "You did alright";
    } else {
      message = "...terrible";
    }
    return (
      <div className="Results">
        <div className="well">
          <h4>You got {this.props.score} out of {this.props.questions.length} correct!</h4>
          <h1>{percent}% - {message}</h1>
          <hr />
          <a href="/app" className="btn btn-primary">Take it again!</a>
        </div>
      </div>
    );
  }
}
