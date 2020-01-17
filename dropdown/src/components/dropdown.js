import React from 'react';

const Dropdown = (elements) => {
    return (
        <div>
            <select>
                {
                    elements.elements.map(item => <option key={item}>{item}</option>)
                }
            </select>
            <div>
                <button>Choose</button>
            </div>
        </div>
    );
}

export default Dropdown;