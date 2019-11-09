import createStateContext from 'react-context-simply';
import timeReducer from './reducers';
import * as actions from './actions'

const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext({time: Date.now(), isOn: false}, timeReducer, actions);

const useTimeState = useStateValue;
const TimeState = StateProvider;
const TimeStateContext = StateContext

export {
    useTimeState,
    TimeState,
    TimeStateContext
};
