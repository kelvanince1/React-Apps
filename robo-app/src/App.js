import React, { Component } from 'react';

import { robots } from './robots';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
