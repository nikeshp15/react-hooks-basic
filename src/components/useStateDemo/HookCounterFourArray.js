import React, { useState } from 'react'

function HookCounterFourArray() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)+1
        }])
    }

    return (
        <div>
            <div>
                <button onClick={addItem}>Add item</button>
            </div>
            <ul>
                {
                    items.map(item =>
                                <li key={item.id}>{item.value}</li>
                            )
                }
            </ul>
        </div>
    )
}

export default HookCounterFourArray