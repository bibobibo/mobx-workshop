import React from 'react';
import randomTitle from 'random-title';
import './TodoItem.css';

export const TodoItem = ({ todo, finish, redo, remove, edit }) => {
    const handleDone = () => { finish(todo.id); };
    const handleRedo = () => { redo(todo.id); };
    const handleRemove = () => { remove(todo.id); };
    const handleEdit = () => {
        if (!todo.done) {
            edit(todo.id, randomTitle());
        }
    };

    const todoSpanClassName = todo.done ? "Todo_span Todo_span-done" : "Todo_span";
    return <li>
        <span onDoubleClick={handleEdit} className={todoSpanClassName}>{todo.title}</span>
        {!todo.done && <button onClick={handleDone}>done</button>}
        {todo.done && <button onClick={handleRedo}>redo</button>}
        <button onClick={handleRemove}>delete</button>
    </li>;
};
