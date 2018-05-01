import React, { Component } from 'react';

import axios from '../../axios-orders';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import Input from '../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: ''
      },
      zip: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip-Code',
        },
        value: ''
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'City',
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
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
        <Input elementType="" elementConfig="" value="" />
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
