import { SET_TIME, TOGGLE_TIME } from "./constants";

export default function createActions(dispatch) {
  return {
    setTime: (time) => dispatch({ type: SET_TIME, payload: time, }),
    toggleTime: (toggle) => dispatch({ type: TOGGLE_TIME, payload: toggle }),
  };
}