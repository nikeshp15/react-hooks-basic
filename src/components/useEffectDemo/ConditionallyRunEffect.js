import React, { useEffect, useState } from 'react'

function ConditionallyRunEffect() {
    const [count, setCount] = useState(0);
    const [name, setMyName] = useState('nikesh');

    useEffect(() => {
        console.log('updating title: effect');
        document.title = `Count is ${count}`
    }, [ count ])

    // this effect will execute when either count or name change
    useEffect(() => {
        console.log('second effect executed');
    }, [name, count])

    function incrementCount() {
        setCount(count + 1);
    }
    const nameChangeHandler = (e) => {
        setMyName(e.target.value)
    }
    return (
        <div>
            <input type='text' value={name} onChange={nameChangeHandler} />
            <button onClick={incrementCount}>Count {count}</button>
        </div>
    )
}

export default ConditionallyRunEffect