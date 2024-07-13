import React from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    return (
        <div>
            <div>{firstName} {lastName}</div>
            <div>username : <input type="text" {...bindFirstName}/></div>
            <div>lastname : <input type="text" {...bindLastName} /></div>
        </div>
    )
}

export default UserForm