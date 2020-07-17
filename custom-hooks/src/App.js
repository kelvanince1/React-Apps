import React from 'react';

import UseLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = UseLocalStorage('name', '');

  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}

export default App;
