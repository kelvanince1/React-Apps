import React from 'react';

import Form from './Form';

function App() {
  return (
    <div className="App">
      <Form
        onSubmit={(data) => alert(`${data.username} ${data.password}`)}
      />
    </div>
  );
}

export default App;
