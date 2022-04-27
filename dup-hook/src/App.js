import React, { useState } from 'react';
import Box from './Box';
import Resource from './Resource';

function App() {
  const [count, setCount] = useState(4);

  // To run the function only the very first time the component renders, call the function. This is good for expensive computation.
  // const [count, setCount] = useState(() => {
  //   return 4;
  // });

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <button>{count}</button>
      <button onClick={incrementCount}>+</button>
      <Box increment={increment} />
      <Resource />
    </>
  );
}

export default App;
