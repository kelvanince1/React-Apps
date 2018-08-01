import React, { Component } from 'react';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'cornflowerblue' }}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
