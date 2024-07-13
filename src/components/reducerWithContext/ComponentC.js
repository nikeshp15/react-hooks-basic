import React from 'react'
import ComponentD from './ComponentD'

const style = {
    padding: '24px',
    backgroundColor: 'lightblue'
}

function ComponentC() {
  return (
    <div style={style}>
        <div>ComponentC</div>
        <ComponentD />
    </div>
  )
}

export default ComponentC