import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const style = {
    marginBottom: '24px',
    backgroundColor: 'yellow'
}

export const CountContext = React.createContext();

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

function ReducerContextContainer() {
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={style}>
        <div>Reducer & Context Example</div>
        <div>Count : {count}</div>
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <ComponentA />
            <ComponentB />
        </CountContext.Provider>
    </div>
  )
}

export default ReducerContextContainer