import { connect } from 'react-redux'
import { setVisibilityFilter } from '../modules/todo/actions'
import Button from '../components/button/Button'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todos.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default FilterLink
