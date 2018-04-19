import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Ox from '../../../hoc/Ox';

class Person extends Component {
  render() {
    return (
      <Ox>
          <p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Ox>
    )
  }
}

export default withClass(Person);
