import React, { useEffect, useState } from 'react'

function RunEffectOnce() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('use effect called');
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

  return (
    <div>Hooks X : {x} Y: {y}</div>
  )
}

export default RunEffectOnce