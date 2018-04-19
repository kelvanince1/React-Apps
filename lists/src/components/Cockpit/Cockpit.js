import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Ox';

const Cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>Hi, I am a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Switch Name</button>
        <button onClick={props.login}>Log in</button>
    </Aux>
  );
};

export default Cockpit;
