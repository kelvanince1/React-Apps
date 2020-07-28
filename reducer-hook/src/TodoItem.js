import React from 'react';

import { actions } from './Todo';

export default function TodoItem({ todo, dispatch }) {
    return (
        <div>
            <span
                style={{ color: todo.complete ? '#AAA' : '#000'}}
            >
                {todo.name}
            </span>
            <button
                onClick={() => dispatch({ type: actions.TOGGLE_TODO, payload: { id: todo.id } })}
            >
                Toggle
            </button>
            
            <button
                onClick={() => dispatch({ type: actions.DELETE_TODO, payload: { id: todo.id } })}
            >
                Delete
            </button>
        </div>
    );
}