import { SET_TIME, TOGGLE_TIME } from "./constants";

export const setTime = (time) => ({ type: SET_TIME, payload: time });
export const toggleTime = (toggle) => (state, dispatch) => {
    dispatch({ type: TOGGLE_TIME, payload: toggle })
    if(toggle){
        this.interval = setInterval((act) => {
            dispatch(setTime( Date.now() ))
        }, 1000);
    }else{
        clearInterval(this.interval)
    }
    
}