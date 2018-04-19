import React, { Component } from 'react';

import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Validation from '../components/Validation';
import Char from '../components/Char';
import withClass from '../hoc/WithClass';
import Ox from '../hoc/Ox';
// import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '2114', name: 'Max', age: 28 },
        { id: '1413', name: 'Manu', age: 29 },
        { id: '252', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      username: '',
      toggleClicked: 0
    };
  };

  componentWillMount() {
    console.log('[App.js] Inside component Will Mount');
  }

  componentDidMount() {
    console.log('[App.js] Inside component Did Mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside component Will Receive Props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside should Component Update', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside component Will Update');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside component Did Update');
  }

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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }

    });
  };

  setLength = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    console.log('[App.js] Inside Render');
    const charList = this.state.username.split('').map((char, index) => {
        return <Char
          character={char}
          key={index}
          clicked={() => this.deleteUsernameHandler(index)}
          />
    });



    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    };

    return (
      <Ox>
        <button onClick={() => {this.setState({ showPersons: true })}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
        <input type='text' onChange={this.setLength} value={this.state.username} />

        <Validation
          username={this.state.username}
        />

        {charList}
      </Ox>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
