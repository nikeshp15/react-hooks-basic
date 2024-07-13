import React, { useEffect, useState } from 'react'

function HookCounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count is ${count}`
    })

    function incrementCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={incrementCount}>Count {count}</button>
        </div>
    )
}

export default HookCounterEffect