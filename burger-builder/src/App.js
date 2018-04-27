import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Route>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </Route>
    );
  }
}

export default App;
