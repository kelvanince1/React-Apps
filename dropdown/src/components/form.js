import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    console.log(results);

    return (
        <div>
             <input
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => setResults(oldResults => [...oldResults, value])}>Add</button>
            <div>
                {
                    results.map(todo => <li key={todo}>{todo}</li>)
                }
            </div>
        </div>
    );
}

export default Form;