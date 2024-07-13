import React from 'react'
import ComponentC from './ComponentC'

const style = {
    padding: '24px',
    backgroundColor: 'red'
}

function ComponentB() {
  return (
    <div style={style}>
        <div>ComponentB</div>
        <ComponentC />
    </div>
  )
}

export default ComponentB