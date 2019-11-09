import { ADD_TODO, RESET_TODO_STATE, TODO_SUCESS, TODO_FAIL, TODO_LOADING } from './constants'

export default function todoReducer(state, action) {
    console.log('REDUCER ', action.type) 
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case TODO_SUCESS:
            return {
                todos: [
                    ...state.todos,
                    ...action.payload
                ],
                loading: action.loading
            }
        case TODO_FAIL:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            }
        case TODO_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case RESET_TODO_STATE:
            return {
                ...state,
                todos: []
            }

        default:
            return state;
    }
}