import { SET_TIME, TOGGLE_TIME } from "./constants";

export default function timeReducer(state, action) {
    switch (action.type){
      case SET_TIME:
        return {
          isOn: true,
          time: action.payload
        }
      case TOGGLE_TIME:
        return {
          isOn: action.payload,
          time: Date.now()
        }
      default:
        
        return state;
    }
}