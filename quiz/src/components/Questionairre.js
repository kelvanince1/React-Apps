import React, { Component } from 'react';

import questions from './questions.json';

class Questionairre extends Component {
  componentDidMount() {
    console.log(questions);
    questions.results.map(question => {
      console.log(question)
    });
  };

  render() {
    let result = questions.results.map((item,i) => {
      return (
          <p key={i}>
            {item.question}
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
