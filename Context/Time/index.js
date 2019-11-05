import createStateContext from '../Base/state';
import timeReducer from './reducers';
import { useInterval } from './middlewares';

const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext(timeReducer, {time: Date.now(), isOn: false}, useInterval);

const useTimeState = useStateValue;
const TimeState = StateProvider;
const TimeStateContext = StateContext

export {
    useTimeState,
    TimeState,
    TimeStateContext
};
