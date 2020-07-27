import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({
      type: "INCREMENT_COUNT"
    });
  }

  function decrementCount() {
    dispatch({
      type: "DECREMENT_COUNT"
    });
  }

  return (
    <>
      <h3>Counter {count}</h3>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default App;
