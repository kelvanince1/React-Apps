import React, { useContext } from 'react';

import { UserContext } from '../userContext';

export function About() {
    const message = useContext(UserContext);

    return (
        <div>
            <div>{message}</div>
            <h2>About</h2>
        </div>
    );
};
