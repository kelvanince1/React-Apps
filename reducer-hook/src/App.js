import React, { useReducer } from 'react';

import Todo from './Todo';

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

      <Todo />
    </>
  );
}

export default App;
