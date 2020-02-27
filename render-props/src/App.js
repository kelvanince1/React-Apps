import React, { useState } from 'react';

import ToggleRender from './ToggleRender';

function App() {
  return (
    <div className="App">
      <ToggleRender>
        {({ todos }) => (
          <div>
            {todos.map(todo => (
              <p key={todo}>{todo}</p>
            ))}
          </div>
        )}
      </ToggleRender>


      <ToggleRender>
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
