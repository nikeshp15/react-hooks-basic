import React, { useState } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle';

function DocTitleTwo() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count)


    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>click</button>
        </div>
    )
}

export default DocTitleTwo