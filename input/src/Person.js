import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>Im {props.name}</p>
      <p onClick={props.handleClick}>{props.children}</p>
    </div>
  )
}

export default person;
