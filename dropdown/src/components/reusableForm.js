import React, { useState } from 'react';

const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

const ReusableForm = (props) => {
    const { resetValue, ...text } = useInputValue('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                props.onSubmit(text.value);
                resetValue();
            }}
        >
             <input {...text} />
        </form>
    );
}

export default ReusableForm;
