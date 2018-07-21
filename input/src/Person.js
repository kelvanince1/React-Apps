import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>Im {props.name}</p>
      <p onClick={props.handleClick}>{props.children}</p>
      <input type="text" onChange={props.handleInput} />
    </div>
  )
}

export default person;
