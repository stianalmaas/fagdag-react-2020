import React from 'react';
import {useDispatch} from "react-redux";
import {toggleTodo} from "../../modules/todo/actions";

const Todo = ({text, active, index}) => {
    const dispatch = useDispatch();
    return (
        <div
            style={active ? null : {textDecoration: 'line-through'}}
            onClick={() => dispatch(toggleTodo(index))}
        >
            {text}
        </div>
    );
};

export default Todo;