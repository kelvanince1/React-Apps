import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, { text: action.payload, completed: false }] }
    case 'TOGGLE_TODO':
      return {
          todos: state.todos.map((todo, i) => i === action.idx ? {...todo, completed: !todo.completed} : todo)
      }
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
          dispatch({ type: 'ADD_TODO', payload: text });
          setText('');
      }}>
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>
          {
              todos.map((todo, i) => (
                  <div
                    key={i}
                    onClick={() => dispatch({ type: 'TOGGLE_TODO', idx: i })}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : ''
                    }}
                >
                    {todo.text}
                </div>
              ))
          }
      </div>
    </div>
  );
}

export default Todos;
