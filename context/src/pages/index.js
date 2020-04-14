import React, { useContext } from 'react';

import { UserContext } from '../userContext';

export function Index() {
    const message = useContext(UserContext);

    return (
        <div>
            <div>{message}</div>
            <h2>Home</h2>
        </div>
    );
};
