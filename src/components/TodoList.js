import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
	<ul>
	{todos.map((todo, index) => (
		<Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
	))}
	</ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
