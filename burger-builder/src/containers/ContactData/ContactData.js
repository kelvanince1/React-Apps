import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={classes.Input} typ="text" name="name" placeholder="Your name" />
          <input className={classes.Input} typ="text" name="email" placeholder="Your email" />
          <input className={classes.Input} typ="text" name="street" placeholder="Your street" />
          <input className={classes.Input} typ="text" name="zipcode" placeholder="Your zip code" />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  };
};

export default ContactData;
