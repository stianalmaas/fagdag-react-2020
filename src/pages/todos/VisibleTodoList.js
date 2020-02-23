import React from 'react';
import TodoList from "../../components/TodoList";
import {shallowEqual, useSelector} from "react-redux";


const VisibleTodoList = () => {
    const todos = useSelector( state => {
        console.log("State in VisibleTodoList", state);
        return state.todos.data.todos;
    }, shallowEqual);

    return (
        <div>
            <TodoList todos={todos}/>
        </div>
    );
};

export default VisibleTodoList;