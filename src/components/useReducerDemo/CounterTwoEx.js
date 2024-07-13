import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    second: 2
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return { ...state, firstCounter: state.firstCounter + 1 };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - 1 }
        case 'reset':
            return initialState;
        case 'customValue':
            return { ...state, firstCounter: state.firstCounter + action.value }
        default:
            return state;
    }
}

function CounterTwoEx() {
    const [countObject, countDispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{JSON.stringify(countObject)}</div>
            <div>Count : {countObject.firstCounter}</div>
            <button onClick={() => countDispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => countDispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => countDispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => countDispatch({ type: 'customValue', value: 5 })}>Increment by 5</button>
        </div>
    )
}

export default CounterTwoEx