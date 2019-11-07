export default function logger ([state, actions]) {
    const newDispatched = action => {
      console.log("dispatching", action);
      return actions(action);
    }

    console.log("next state", state);
    return [state, newDispatched]
}