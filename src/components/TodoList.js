import React from 'react';
import Todo from './todoList/Todo';

const TodoList = ({todos}) => {

    return (
        <ul>
            {todos.map(((todo, index) => {
                return <Todo {...todo} index={index} key={todo.text} />
            }))}
        </ul>
    );
};

export default TodoList;