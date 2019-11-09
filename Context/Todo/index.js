import createStateContext from 'react-context-simply'
import todoReducer from './reducers'
import * as actions from './actions'
import { useApi, logger, addTodo } from './middlewares'
import { GET_TODOS, ADD_TODO } from './constants'

const initialState = {
    todos: [],
    loading: false,
    error: null
}
const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext(initialState, todoReducer, actions, [
    
    {action: '*', middleware: logger},
    {action: [ADD_TODO], middleware: addTodo},
    {action: GET_TODOS, middleware: useApi},
    
]);

const useTodoState = useStateValue;
const TodoState = StateProvider;

export {
    useTodoState,
    TodoState
};