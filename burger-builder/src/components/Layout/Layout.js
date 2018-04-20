import React from 'react';

import Aux from '../../hoc/Auxillery';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <div></div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
