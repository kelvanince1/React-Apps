import React, { useState } from 'react';

import { useFetch } from './useFetch';

const App = () => {
  const [count, setCount] = useState(0);

  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos');

  const computeLongestWord = () => {
    if (!data) {
      return [];
    }

    let longest = '';

    data.forEach(item => item.title.split(' ').forEach(word => {
      if (word.length > longest.length) {
        longest = word;
      }
    }));

    return longest;
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>{computeLongestWord()}</div>
    </div>
  );
}

export default App;