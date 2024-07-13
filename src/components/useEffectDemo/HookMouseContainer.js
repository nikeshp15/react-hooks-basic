import React, { useState } from 'react'
import HookMouse from './HookMouse'

function HookMouseContainer() {
    const [display, setToggle] = useState(true)
  return (
    <div>
        <button onClick={() => setToggle(!display)}>Toogle display</button>
        {
            display && <HookMouse />
        }
    </div>
  )
}

export default HookMouseContainer