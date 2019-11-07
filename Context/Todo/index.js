import createStateContext from 'react-context-simply';
import todoReducer from './reducers'
import * as actions from './actions'
import logger from './middlewares'

const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext([], todoReducer, actions, logger);

const useTodoState = useStateValue;
const TodoState = StateProvider;

export {
    useTodoState,
    TodoState
};