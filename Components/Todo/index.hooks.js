import { useEffect } from 'react';
import { useTodoState } from '../../Context/Todo';


export function useTodo() {
    const [state, actions] = useTodoState();
    const { getTodos } = actions
    
    useEffect(() => {
        getTodos()
    }, []);
    
    return [state, actions];
}