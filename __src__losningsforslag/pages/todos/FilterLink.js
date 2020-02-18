import { connect } from 'react-redux';
import { actions } from '../../modules/todo/';
import Button from '../../components/button/Button';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todos.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(actions.setVisibilityFilter(ownProps.filter))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default FilterLink
