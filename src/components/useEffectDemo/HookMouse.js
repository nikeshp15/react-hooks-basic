import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('use effect called');
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('hook mouse component unmounted');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = (e) => {
        console.log(e.clientX, e.clientY);
        setX(e.clientX)
        setY(e.clientY)
    }

  return (
    <div>Hooks X : {x} Y: {y}</div>
  )
}

export default HookMouse

