import React, { Component } from 'react';

import questions from './questions.json';

class Questionairre extends Component {
  state = {
    totalScore: 0,
    usersSelection: null
  };

  handleClick = (item) => {
    for (let i = 0; i < questions.results.length; i++) {
      if (item === questions.results[i].correct_answer) {
        this.setState(prevState => {
          return {totalScore: prevState.totalScore + 1}
        })
      }
    }

    // for (let i = 0; i < questions.results; i++) {
    //   console.log(questions.results[i].correct_answer);
    //   if (item === questions.results[i].correct_answer) {
    //     console.log('Correct');
    //   }
    // }
  };

  render() {
    let result = questions.results.map((item,i) => {
      return (
          <div key={i}>
            <p>{item.question}</p>
            <ul style={{ 'listStyleType': 'none' }}>
              <li onClick={() => this.handleClick(item.incorrect_answers[0].one)}>{item.incorrect_answers[0].one}</li>
              <li onClick={() => this.handleClick(item.incorrect_answers[0].two)}>{item.incorrect_answers[0].two}</li>
              <li onClick={() => this.handleClick(item.incorrect_answers[0].three)}>{item.incorrect_answers[0].three}</li>
              <li onClick={() => this.handleClick(item.incorrect_answers[0].four)}>{item.incorrect_answers[0].four}</li>
            </ul>
          </div>
      );
    });
    return (
      <div>
        <h4>Your score: {this.state.totalScore}</h4>
        {result}
      </div>
    );
  };
};

export default Questionairre;
