import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (currentState, action) => {
    switch(action) {
        case 'increment': 
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

function HookCounterReducer() {
    const [count, countDispatch] = useReducer(reducer, initialState)
  
    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default HookCounterReducer