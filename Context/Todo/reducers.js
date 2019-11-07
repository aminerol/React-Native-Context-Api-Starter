import { ADD_TODO, RESET_TODO_STATE, GET_TODOS } from './constants'
import DUMMY_TODOS from './data'


export default function todoReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            const newState = [
                ...state,
                action.payload
            ];
            return newState
        case GET_TODOS:
            return [
                ...state,
                ...action.payload
            ]

        case RESET_TODO_STATE:
            return DUMMY_TODOS;

        default:
            return state;
    }
}