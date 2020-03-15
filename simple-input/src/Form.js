import React, { useState } from 'react';

const Form = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.onSubmit({username, password});
                setUsername('');
                setPassword('');
            }}
        >
            <input
                onChange={e => setUsername(e.target.value)}
                value={username}
            />

            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
            />  

            <button
                type="submit"
            >
                Submit
            </button>

        </form>
    )
}

export default Form;