import React from 'react';

import User from '../../components/User';

const authPage = () => (
  <div>
    <h1>Auth Page</h1>
    <User name="Kelvan" age={25} />
    <style jsx> {`
        div {
          border: 1px solid "eee";
          box-shadow: 0 2p 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}
    </style>
  </div>
)

export default authPage;
