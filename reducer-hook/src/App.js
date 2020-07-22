import React, { useState, useReducer } from 'react';

const actions = {
  INCREMENT: 'increment',
  DECEREMENT: 'decrement'
}

function reducer(state, action) {
  switch(action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1 }
    case actions.DECEREMENT:
      return { count: state.count - 1 }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);

  function increment() {
    dispatch({ type: actions.INCREMENT });
  }

  function decrement() {
    dispatch({ type: actions.DECEREMENT });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
