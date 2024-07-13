import React, { useContext } from 'react'
import { CountContext } from './ReducerContextContainer'

const style = {
    padding: '24px',
    backgroundColor: 'lightblue'
}

function ComponentA() {
    const countContext = useContext(CountContext)

    return (
        <div style={style}>
            <div>ComponentA</div>
            <div>
                <div>Count : {countContext.countState}</div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentA