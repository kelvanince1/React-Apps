import React, { Component } from 'react';

import axios from '../../axios-orders';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import Input from '../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
      loading: false
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kelvan Ince',
        address: {
          street: 'Test 11',
          zip: '44512',
          city: 'San Francisco'
        },
        deliveryMethod: 'fastest'
      }
    }
    axios.post('/orders.json', order)
      .then(res => {
        console.log(res);
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loading: false
        })
      })
  }

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Your name" />
        <Input inputtype="input" type="text" name="email" placeholder="Your email" />
        <Input inputtype="input" type="text" name="street" placeholder="Your street" />
        <Input inputtype="input" type="text" name="zipcode" placeholder="Your zip code" />
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  };
};

export default ContactData;
