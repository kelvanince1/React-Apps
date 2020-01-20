import React, { useState, useEffect } from 'react';

import Form from './components/form';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response) {
          throw new Error('Failed');
        }

        const res = response.json();

        return res;
      })
        .then(data => {
          console.log('DATA', data);
          data.map(() => setTodos(data.map(item =>  item, ...todos)));
        })
  }, []);

  const setTodo = todo => setTodos(todos.map((item, j) => j === todo ? { ...item, done: !item.done } : item ));

  return (
    <div>
      <Form
        onSubmit={title => setTodos([ { title }, ...todos ])}
      />
      <div>
        {
          todos.map((todo, i) => (
            <li
              key={todo.title}
              onClick={() => setTodo(i)}
              style={{
                'textDecoration': todo.done ? 'line-through' : ''
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
