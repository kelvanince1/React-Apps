// import React, { useState } from 'react';

// const useInputValue = (initialValue) => {
//     const [value, setValue] = useState(initialValue);

//     return {
//         value,
//         onChange: e => setValue(e.target.value),
//         resetValue: () => setValue('')
//     }
// }

// const ReusableForm = (props) => {
//     const { resetValue, ...text } = useInputValue('');

//     return (
//         <form
//             onSubmit={e => {
//                 e.preventDefault();
//                 props.onSubmit(text.value);
//                 resetValue();
//             }}
//         >
//              <input {...text} />
//         </form>
//     );
// }

// export default ReusableForm;

import React, { useState } from 'react';

const ReusableForm = (props) => {
    const [value, setValue] = useState('');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.onSubmit(value);
                setValue('');
            }}
        >
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    );
}

export default ReusableForm;
