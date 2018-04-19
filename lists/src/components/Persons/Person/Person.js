import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Ox from '../../../hoc/Ox';

class Person extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    if(this.props.position === 0) {
      this.inputElement.focus();
    }
  };

  render() {
    return (
      <Ox>
          <p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
            ref={(inp) => { this.inputElement = inp }}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
      </Ox>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
