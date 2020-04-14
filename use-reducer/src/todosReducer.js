import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Todos() {
  const [{todos}, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState('');

  return (
    <div className="App">
      <form onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'ADD_TODO', text: text })
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>
          {JSON.stringify(todos)}
      </div>
    </div>
  );
}

export default Todos;
