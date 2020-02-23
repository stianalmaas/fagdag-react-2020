import {actions, reducer} from '..';

describe('todo reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {
        todos: []
      }
    })
  });

  it('should add a todo to an empty list of todos', () => {
    const addTodoAction = actions.addTodo('Do this!');
    expect(reducer({todos: []}, addTodoAction)).toEqual({
      data: {
        todos: [{
          text: 'Do this!',
          active: true
        }]
      }
    });
  });

  it('should toggle todo status', () => {
    const state = {
      data: {
        todos: [{
          text: 'Do this!',
          active: true
        }]
      }
    };
    const toggleAction = actions.toggleTodo(0);

    expect(reducer(state, toggleAction)).toEqual({
      data: {
        todos: [{
          text: 'Do this!',
          active: false
        }]
      }
    });
  });

});
