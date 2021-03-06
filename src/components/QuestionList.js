import React, { Component } from 'react';
import Question from './Question';

export default class QuestionList extends Component {
  render() {
    return (
      <div className="QuestionList">
        {
          this.props.questions.map(question => {
            if (question.id === this.props.current) {
              return <Question question={question} key={question.id} {...this.props} />
            }
          })
        }
      </div>
    );
  }
}
