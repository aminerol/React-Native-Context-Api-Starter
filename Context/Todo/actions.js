import { ADD_TODO, RESET_TODO_STATE, GET_TODOS } from './constants'

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo })
export const resetTodoState = () => ({ type: RESET_TODO_STATE })
export const getTodos = () => async (state, dispatch) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await res.json()
  
  dispatch({ type: GET_TODOS, payload: todos })
  
};