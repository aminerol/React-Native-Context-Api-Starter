import React, { createContext, useContext, useReducer, useState } from 'react';

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = useState(initialState);

  const dispatch = async action => {
    const result = reducer(state, action);
    if (typeof result.then === "function") {
      try {
        const newState = await result;
        setState(newState);
      } catch (err) {
        setState({ ...state, error: err });
      }
    } else {
      setState(result);
    }
  };

  return [state, dispatch];
};

export default function createStateContext(reducer, initialState, middleware, isAsync = false) {
    const middlewares = Array.isArray(middleware) ? middleware : [middleware]
    const StateContext = createContext([initialState, () => null]);
    const StateProvider = ({children}) => {
        const stateContext = middlewares.reduce((agg, mw) => mw ? mw(agg) : agg, isAsync ? useAsyncReducer(reducer, initialState) : useReducer(reducer, initialState));
        return <StateContext.Provider value={stateContext}>{children}</StateContext.Provider>
    };
    const useStateValue = () => useContext(StateContext);
    return {useStateValue, StateProvider, StateContext}
}