import {useEffect} from 'react';
import createActions from './actions';

export function useInterval([state, dispatch]) {
    const { isOn } = state
    const actions = createActions(dispatch)

    useEffect(() => {
        if(isOn){
          this.interval = setInterval(() => {
            actions.setTime( Date.now() )
          }, 1000);
        }else{
          clearInterval(this.interval)
        }
        
        return () => { return clearInterval(this.interval) }
    }, [state, actions])
    return [state, actions]
}