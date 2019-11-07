import { SET_TIME, TOGGLE_TIME } from "./constants";

export const setTime = (time) => ({ type: SET_TIME, payload: time });
export const toggleTime = (toggle) => ({ type: TOGGLE_TIME, payload: toggle });