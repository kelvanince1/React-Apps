import React, { useContext } from 'react';

import { UserContext } from '../userContext';
import { login } from './login';

export function Index() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <div>{JSON.stringify(user)}</div>
            <h2>Home</h2>
            {
                user ?
                <button
                    onClick={() => setUser(null)}
                >
                    Logout
                </button>
                :
                <button
                    onClick={async () => {
                        const user = await login();
                        setUser(user);
                    }}
                >
                    Login
                </button>
            }
        </div>
    );
};
