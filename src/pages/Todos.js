import React from "react";
import AddTodo from './todos/AddTodo';
import VisibleTodoList from './todos/VisibleTodoList';
import Filters from '../components/Filters'

const Todos = () => (
	<div>
		<AddTodo />
		<VisibleTodoList/>
	</div>
);

export default Todos;
