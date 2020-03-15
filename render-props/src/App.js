import React, { useState } from 'react';

import ToggleRender from './ToggleRender';

function App() {
  return (
    <div className="App">
      <ToggleRender markup="vertical">
        {({ todos }) => (
          <div>
            {todos.map(todo => (
              <p key={todo}>{todo}</p>
            ))}
          </div>
        )}
      </ToggleRender>


      <ToggleRender markup="flex">
        {({ todos }) => (
          <div style={{ display: 'flex' }}>
            {todos.map(todo => (
              <p key={todo}>{todo}</p>
            ))}
          </div>
        )}
      </ToggleRender>
     </div>        
  );
}

export default App;
