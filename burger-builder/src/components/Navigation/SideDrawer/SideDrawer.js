import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillery';

const sideDrawer = (props) => {
  let attachedClasses = [classes.sideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.Open]
  };

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo height="11%" margin="32px" />
        <nav>
          <NavigationItems />
        </nav>
       </div>
    </Aux>
  );
};

export default sideDrawer;
