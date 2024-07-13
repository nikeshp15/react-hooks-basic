import React, { useState } from 'react'

function HookCounterThreeObject() {
    const [user, setUserData] = useState({ name: '', age: 0 });

    function onNameChange(e) {
        setUserData({ ...user, name: e.target.value })
    }
  return (
    <form>
        <div>name : <input type="text" value={user.name} onChange={onNameChange}/></div>
        <div>age : <input type="number" value={user.age} onChange={e => setUserData({ ...user, age: e.target.value })}/></div>

        <h2>Your name : {user.name}</h2>
        <h2>Your age : {user.age}</h2>

    </form>
  )
}

export default HookCounterThreeObject