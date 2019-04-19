import React, { Component } from 'react';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import './resources/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'cornflowerblue' }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venueNfo">
          <VenueNfo />
        </Element>
        <Element name="highlights">
          <Highlights  />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
