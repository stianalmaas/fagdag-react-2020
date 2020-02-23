import {actions, constants} from '..'

describe('todo actions', () => {
  it('should create an action to add a todo', () => {
    expect(actions.addTodo('testeteste')).toEqual({type: constants.ADD_TODO, text: 'testeteste'})
  });

  it('should create an action to toggle a todo', () => {
    expect(actions.toggleTodo(5)).toEqual({type: constants.TOGGLE_TODO, index: 5})
  });

});
