import { connect } from 'react-redux'
import { toggleTodo } from '../modules/todo/actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todo.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)