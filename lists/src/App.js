import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';
import Validation from './Validation';
import Char from './Char';

class App extends Component {
  state = {
    persons: [
      { id: '2114', name: 'Max', age: 28 },
      { id: '1413', name: 'Manu', age: 29 },
      { id: '252', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    username: ''
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    })
  }

  deleteUsernameHandler = (index) => {
    const text = this.state.username.split('');
    // const users = [...this.state.username];
    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({
      username: updatedText
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  setLength = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    const charList = this.state.username.split('').map((char, index) => {
        return <Char
          character={char}
          key={index}
          clicked={() => this.deleteUsernameHandler(index)}
          />
    });



    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        <input type='text' onChange={this.setLength} value={this.state.username} />

        <Validation
          username={this.state.username}
        />

        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
