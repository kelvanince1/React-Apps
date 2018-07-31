import React from 'react';

import Carousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
  return (
    <div style={{ position:"relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>

      <Countdown />
      
    </div>
  );
};

export default Featured;
