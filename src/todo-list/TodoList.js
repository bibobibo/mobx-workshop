import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../apis/todoApi';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react-lite';

const TodoList = ({todoStore}) => {
    
    useEffect(() => {
        todoStore.loadTodos();
    }, [todoStore]);

    return (
        <section>
            <p>{todoStore.report}</p>d
            <ul>
                {todoStore.todos.map((todo, index) => <TodoItem todoStore={todoStore} id={todo.id} key={index}/>)}
            </ul>
        </section>
    );
};

export default observer(TodoList);
