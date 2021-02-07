import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../apis/todoApi';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const finish = (id) => {
        const newTodos = patchItemFromListById(todos, id, {done: true});
        setTodos(newTodos);
    };
    const redo = (id) => {
        const newTodos = patchItemFromListById(todos, id, {done: false});
        setTodos(newTodos);
    };
    const remove = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    const edit = (id, newTitle) => {
        const newTodos = patchItemFromListById(todos, id, {title: newTitle});
        setTodos(newTodos);
    };
    useEffect(() => {
        fetchTodos().then(todos => setTodos(todos));
    }, []);
    const todosAmount = todos.filter(todo => !todo.done).length;

    return (
        <section>
            <p>{`there are ${todosAmount} task(s) to be done`}</p>
            <ul>
                {todos.map((todo, index) => <TodoItem edit={edit} remove={remove} finish={finish} todo={todo} redo={redo} key={index} />)}
            </ul>
        </section>
    );
};

const patchItemFromListById = (todos, id, patch) => {
    return todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                ...patch
            };
        }

        return todo;
    });
}

