import React from 'react';

import BurgerIngrediant from './Ingrediants/BurgerIngrediant';
import classes from './Burger.css';

const burger = (props) => {
  const transformedIngrediants = Object.keys(props.ingrediants).map(igKey => {
    return [...Array(props.ingrediants[igKey])].map((_, i) => {
      return <BurgerIngrediant
        key={igKey + i}
        type={igKey}
      />
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type="bread-top" />
      {transformedIngrediants}
      <BurgerIngrediant type="bread-bottom" />
    </div>
  );
};

export default burger;
