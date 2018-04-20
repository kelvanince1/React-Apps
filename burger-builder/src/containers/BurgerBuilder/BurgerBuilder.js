import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxillery';

class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    return (
      <Aux>
        <Burger
          ingrediants={this.state.ingrediants}
        />
        <div>Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;
