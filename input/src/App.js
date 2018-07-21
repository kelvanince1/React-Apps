import React, { Component } from 'react';

import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 26 },
      {name: 'Wendy', age: 32 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Johnny', age: 27 },
        {name: 'Wendy', age: 32 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <Person
          handleClick={this.switchNameHandler}
          name={this.state.persons[0].name}>Software Engineer</Person>
        <button onClick={this.switchNameHandler}>Switch</button>
      </div>
    );
  }
}

export default App;
