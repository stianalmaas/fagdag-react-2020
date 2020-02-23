import { combineReducers } from 'redux'
import constants from "./constants";

const data = (state = {todos: []}, action) => {
    // console.log("todoreducer - action: ", action)
    switch (action.type) {
        case constants.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({text: action.text, active: true})
            };
            break;
        case constants.TOGGLE_TODO:
            let newState = {
                todos: [...state.todos]
            };
            newState.todos[action.index] = {...newState.todos[action.index], active: !newState.todos[action.index].active};
            return newState;
            break;
        default:
            return state;
    }
};

const reducers = combineReducers({
    data
});

export default reducers;
