import React, { useState } from 'react';

import { useFetch } from './useFetch';

const App = () => {
  const [count, setCount] = useState(0);

  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;