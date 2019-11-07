import {useEffect} from 'react';
import { setTime } from './actions';

export function useInterval([state, dispatch]) {
  
    const { isOn } = state

    useEffect(() => {
        if(isOn){
          this.interval = setInterval(() => {
            dispatch(setTime( Date.now() ))
          }, 1000);
        }else{
          clearInterval(this.interval)
        }
        
        return () => { return clearInterval(this.interval) }
    }, [state, dispatch])

    return [state, dispatch]
}