import React from 'react';

import Dropdown from './components/dropdown';

const App = () => {
  return (
    <div>
      <Dropdown
        elements={['-', '1', '2', '3', '4', '5']}
      />
    </div>
  );
}

export default App;
