import React, { useState } from 'react';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '500px'
    },
    field: {
        width: '15rem',
        height: '2rem',
        padding: '5rem',
        margin: '1.5rem'
    },
    button: {
        borderRadius: '10px',
        width: '7rem',
        height: '2rem',
        fontSize: '0.8rem',
        backgroundColor: '#D6328E',
        color: '#fff'
    }
};

const Dropdown = (props) => {
    const [item, setItem] = useState('');

    const handleItemChange = item => {
        setItem(item);
        console.log(item);
    }

    return (
        <div style={styles.container}>
            <select
                value={item}
                onChange={event => handleItemChange(event.target.value)}
                style={styles.field}
            >
                {
                    props.elements.map(item => <option key={item}>{item}</option>)
                }
            </select>
            <div>
                <button style={styles.button}>Choose</button>
            </div>
            {item}
        </div>
    );
}

export default Dropdown;