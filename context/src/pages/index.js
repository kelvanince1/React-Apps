import React, { useContext } from 'react';

import { UserContext } from '../userContext';

export function Index() {
    const { value, setValue } = useContext(UserContext);

    return (
        <div>
            <div>{value}</div>
            <h2>Home</h2>

            <button
                onClick={() => setValue('Bye World')}
            >
                Change Value
            </button>
        </div>
    );
};
