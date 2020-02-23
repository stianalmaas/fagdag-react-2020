import React from 'react';
import TodoList from "../../components/TodoList";
import {shallowEqual, useSelector} from "react-redux";
import {VisibilityFilters} from "../../modules/todo/constants";


const VisibleTodoList = () => {
    const todos = useSelector( state => {
        console.log("State in VisibleTodoList", state);
        switch(state.todos.data.filter) {
            case VisibilityFilters.SHOW_ACTIVE:
                return state.todos.data.todos.filter(todo => todo.active);
            break;
            case VisibilityFilters.SHOW_COMPLETED:
                return state.todos.data.todos.filter(todo => !todo.active);
                break;
            case VisibilityFilters.SHOW_ALL:
            default:
                return state.todos.data.todos;

        }
    }, shallowEqual);

    return (
        <div>
            <TodoList todos={todos}/>
        </div>
    );
};

export default VisibleTodoList;