import React, { useContext } from 'react';

import { UserContext } from '../userContext';

export function About() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div>{JSON.stringify(user)}</div>
            <h2>About</h2>
        </div>
    );
};
