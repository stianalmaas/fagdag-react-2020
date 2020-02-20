import { reducer, constants } from '../'
import { VisibilityFilters } from '../constants'

describe('todo reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: [],
      visibilityFilter: VisibilityFilters.SHOW_ALL
    });
  });

  it('should add a todo to an empty list of todos', () => {
    expect(reducer({}, {
      type: constants.ADD_TODO,
      text: 'Some todo'
    }).data).toEqual([
      {
        text: 'Some todo',
        completed: false
      }
    ])
  });

  it('should add a todo to an existing list of todos', () => {
    const initial = {
      data: [
        {
          text: 'Some todo',
          completed: false
        }
      ]
    }

    expect(reducer(initial, {
      type: constants.ADD_TODO,
      text: 'Some other todo'
    }).data).toEqual([
      {
        text: 'Some todo',
        completed: false,
      },
      {
        text: 'Some other todo',
        completed: false,
      },
    ])
  });

  it('should toggle a todo', () => {
    const todos = {
      data: [
        {
          text: 'Some todo',
          completed: false,
        },
        {
          text: 'Some other todo',
          completed: false,
        },
        {
          text: 'Some third todo',
          completed: false,
        },
      ]
    }

    const index = 1

    expect(reducer(todos, {
      type: constants.TOGGLE_TODO,
      index 
    }).data).toEqual([
        {
          text: 'Some todo',
          completed: false,
        },
        {
          text: 'Some other todo',
          completed: true,
        },
        {
          text: 'Some third todo',
          completed: false,
        },
    ])
  });
});
