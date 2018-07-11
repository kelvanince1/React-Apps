import React, { Component } from 'react';

import questions from './questions.json';

class Questionairre extends Component {
  render() {
    let result = questions.results.map((item,i) => {
      return (
          <p key={i}>
            {item.question}<br />
            {item.incorrect_answers}
            {item.correct_answer}
          </p>
      );
    });
    return (
      <div>
        {result}
      </div>
    );
  };
};

export default Questionairre;
