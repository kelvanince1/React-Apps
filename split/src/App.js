import React, { Component, Suspense } from 'react';
import './App.css';

import Page1 from './components/Page1';
//import AsyncComponent from './components/Async/Async';
// We can use a different form of code splitting, specifically with React.lazy, whereby the variables are only loaded in the render function

const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  render() {
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //     const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
    //     return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // } else {
    //     const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
    //     return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }

    // Same result as above ^^ using React.lazy()
     if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page2Lazy onRouteChange={this.onRouteChange} />
          </Suspense>
        );
    } else {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page3Lazy onRouteChange={this.onRouteChange} />
          </Suspense>
        );
    }
  }
}

export default App;
