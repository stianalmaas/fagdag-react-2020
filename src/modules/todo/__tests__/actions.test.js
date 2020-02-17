import { constants, actions } from '../'

describe('todo actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish homework'
    const expectedAction = {
      type: constants.ADD_TODO,
      text
    }

    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to toggle a todo', () => {
    const index = 1
    const expectedAction = {
      type: constants.TOGGLE_TODO,
      index
    }

    expect(actions.toggleTodo(index)).toEqual(expectedAction)
  })

  it('should create an action to set the visibility filter', () => {
    const filter = 'FILTER'
    const expectedAction = {
      type: constants.SET_VISIBILITY_FILTER,
      filter
    }

    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
  })
})
