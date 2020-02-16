import React from "react";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Filters from '../components/Filters'

const Todos = () => (
	<div>
		<Filters />
		<AddTodo />
		<VisibleTodoList />
	</div>
);

export default Todos;
