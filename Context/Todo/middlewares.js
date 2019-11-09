
import { succes, loading, fail } from './actions';

export const logger = ([state, dispatch]) => {
  const newDis = action => {
    console.log('MIDDLEWARE LOGGER => ', action)
    return dispatch(action)
  }
  return [state, newDis]
}

export const useApi = ([state, dispatch]) => {
    const newDis = async action => {   
      try {
        dispatch(action)
        dispatch(loading())
        const res = await fetch('http://jsonplaceholder.typicode.com/todos?_limit=5')
        const todos = await res.json()
        return succes(todos)
      } catch (error) {
        return fail(error)
      }
    }
    return [state, newDis]
}

export const addTodo = ([state, dispatch]) => {
  const newDis = action => {
    console.log('MIDDLEWARE ADDTODO => ', action.type)
    return dispatch(action)
  }
  return [state, newDis]
}

