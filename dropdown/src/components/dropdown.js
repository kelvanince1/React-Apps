import React, {useState } from 'react';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '500px'
    }
};

const Dropdown = (props) => {
    const [item, setItem] = React.useState('');

    const handleItemChange = item => {
        setItem(item);
        console.log(item);
    }

    return (
        <div style={styles.container}>
            <select value={item} onChange={event => handleItemChange(event.target.value)}>
                {
                    props.elements.map(item => <option key={item}>{item}</option>)
                }
            </select>
            <div>
                <button>Choose</button>
            </div>
        </div>
    );
}

export default Dropdown;