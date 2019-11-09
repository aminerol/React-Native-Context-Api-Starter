import { 
    ADD_TODO, 
    RESET_TODO_STATE, 
    GET_TODOS,
    TODO_SUCESS,
    TODO_LOADING,
    TODO_FAIL
} from './constants'

export const addTodo = (todo) => {
    console.log('ACTION ', ADD_TODO)
    return { type: ADD_TODO, payload: todo }
}
export const resetTodoState = () => {
    console.log('ACTION ', RESET_TODO_STATE)
    return { type: RESET_TODO_STATE }
}
export const getTodos = () => {
    console.log('ACTION ', GET_TODOS)
    return { type: GET_TODOS  }
}
export const succes = (todos) => {
    console.log('ACTION ', TODO_SUCESS)
    return { type: TODO_SUCESS, payload: todos, loading: false  }
}
export const loading = () => {
    console.log('ACTION ', TODO_LOADING)
    return { type: TODO_LOADING, loading: true  }
}
export const fail = (error) => {
    console.log('ACTION ', TODO_FAIL)
    return { type: TODO_FAIL, loading: false, error: error  }
}