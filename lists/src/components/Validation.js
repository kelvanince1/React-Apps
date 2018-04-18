import React from 'react';

const Validation = (props) => {
  let decider = null;

  if (props.username.length >= 5) {
    decider = "Text long enough";
  } else {
    decider = "Text too short"
  }
  return (
    <div>
      <p>{props.username.length}</p>
      <p>{decider}</p>
    </div>
  );
};

export default Validation;
