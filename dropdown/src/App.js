import React, { useState } from 'react';

// import Dropdown from './components/dropdown';
import ReusableForm from './components/reusableForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => setTodos(todos.map((todo, k) => k === i ? { ...todo, complete: !todo.complete } : todo))

  return (
    <div>
      <ReusableForm
        onSubmit={text => setTodos([ { text, complete: false }, ...todos])}
      />
      <div>
        {
          todos.map(
            (todo, i) => (
              <li
                onClick={() => toggleComplete(i)}
                key={todo.text}
                style={{
                  textDecoration: todo.complete ? 'line-through' : ''
                }}
              >
                {todo.text}
              </li>
            )
          )
        }
      </div>
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;
