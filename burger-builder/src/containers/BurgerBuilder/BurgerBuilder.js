import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillery';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;
