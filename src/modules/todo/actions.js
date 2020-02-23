import constants from "./constants";

export const addTodo = (text) => {
    return {
        type: constants.ADD_TODO,
        text
    }
};

export const toggleTodo = (index) => {
    return {
        type: constants.TOGGLE_TODO,
        index
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        filter
    }
};

export default {
    addTodo,
    toggleTodo,
    setVisibilityFilter
};