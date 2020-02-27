import React, { useState } from 'react';

const ToggleRender = props => {
    const [todos, setTodos] = useState([1,2,3,4,5]);

    return props.children({
        todos: todos
    })
}

export default ToggleRender;