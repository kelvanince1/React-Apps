import React, { Component } from 'react';

import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 26 },
      {name: 'Wendy', age: 32 }
    ]
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 27 },
        {name: 'Wendy', age: 32 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        {name: event.target.value, age: 32 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <Person
          handleClick={() => this.switchNameHandler.bind(this, 'Kevin')}
          handleInput={this.nameChangedHandler}
          name={this.state.persons[0].name}>Software Engineer</Person>
        <button onClick={this.switchNameHandler.bind(this, 'Max')}>Switch</button>
      </div>
    );
  }
}

export default App;
