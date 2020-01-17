import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('');
    const results = [];

    const pushItem = () => {
        results.push(value);
    }

    console.log(results);

    return (
        <div>
             <input
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => pushItem()}>Add</button>
            <div>
                {
                    results.map(todo => <li key={todo}>{todo}</li>)
                }
            </div>
        </div>
    );
}

export default Form;