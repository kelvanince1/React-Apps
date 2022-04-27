import React from 'react';

function Box({ increment }) {
    return (
        <div>
            <button onClick={() => increment()}>
                Add
            </button>
        </div>
    )
}

export default Box;