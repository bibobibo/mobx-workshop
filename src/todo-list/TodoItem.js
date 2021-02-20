import React from 'react';
import randomTitle from 'random-title';
import { observer } from 'mobx-react-lite';
import './TodoItem.css';

const TodoItem = ({ todoStore, id }) => {
    const handleDone = () => { todoStore.finish(id) };
    const handleRedo = () => { todoStore.redo(id); };
    const handleRemove = (todo) => { todoStore.remove(todo) };
    const handleEdit = () => {
        todoStore.edit(id, randomTitle());
    };

    const todo = todoStore.todos.find(item => item.id === id);
    const todoSpanClassName = todo.done ? "Todo_span Todo_span-done" : "Todo_span";
    return <li>
        <span onDoubleClick={handleEdit} className={todoSpanClassName}>{todo.title}</span>
        {!todo.done && <button onClick={handleDone}>done</button>}
        {todo.done && <button onClick={handleRedo}>redo</button>}
        <button onClick={() => handleRemove(todo)}>delete</button>
    </li>;
};

export default observer(TodoItem);
