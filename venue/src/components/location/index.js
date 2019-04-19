import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23146.34911828881!2d-122.42616908666021!3d37.77853179328337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858086da575917%3A0xead83531aa8f25bb!2sInterContinental+San+Francisco!5e0!3m2!1sen!2sus!4v1533099436872" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export default Location;
