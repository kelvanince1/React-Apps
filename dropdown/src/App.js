// import React, { useState } from 'react';

// // import Dropdown from './components/dropdown';
// import ReusableForm from './components/reusableForm';

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   const toggleComplete = (i) => setTodos(todos.map((todo, k) => k === i ? { ...todo, complete: !todo.complete } : todo))

//   return (
//     <div>
//       <ReusableForm
//         onSubmit={text => setTodos([ { text, complete: false }, ...todos])}
//       />
//       <div>
//         {
//           todos.map(
//             (todo, i) => (
//               <li
//                 onClick={() => toggleComplete(i)}
//                 key={todo.text}
//                 style={{
//                   textDecoration: todo.complete ? 'line-through' : ''
//                 }}
//               >
//                 {todo.text}
//               </li>
//             )
//           )
//         }
//       </div>
//       <button onClick={() => setTodos([])}>Reset</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import ReusableForm from './components/reusableForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const markComplete = (i) => setTodos(todos.map((todo, j) => j === i ? { ...todo, done: !todo.done } : todo))

  return (
    <div>
      <ReusableForm
        onSubmit={value => setTodos([ { value, done: false }, ...todos ])}
      />
      <div>
        {
          todos.map((todo, i) => (
            <li
              key={todo.value}
              onClick={() => markComplete(i)}
              style={{
                'textDecoration': todo.done ? 'line-through' : ''
              }}
            >
              {todo.value}
            </li>
          ))
        }
      </div>
    </div>
  );
}

export default App;
