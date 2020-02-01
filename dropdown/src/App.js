import React, { useState, useEffect } from 'react';
import ReusableForm from './components/reusableForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
  }, [])

  const markComplete = (i) => setTodos(todos.map((todo, j) => j === i ? { ...todo, completed: !todo.completed } : todo));

  return (
    <div>
      <ReusableForm
        onSubmit={title => setTodos([ { title, completed: false }, ...todos ])}
      />
      <div>
        {
          todos.map((todo, i) => (
            <li
              key={todo.title}
              onClick={() => markComplete(i)}
              style={{
                'textDecoration': todo.completed ? 'line-through' : '',
                'cursor': 'pointer'
              }}
            >
              {todo.title}
            </li>
          ))
        }
      </div>
    </div>
  );
}

export default App;
