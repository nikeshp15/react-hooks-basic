import React, { useContext } from 'react'
import { UserContext } from './userContext'

function ComponentB() {
    const context = useContext(UserContext);

    const profileData = JSON.parse(context);
    return (
        <div>
            <div>ComponentB</div>
            id: {profileData.id} name: {profileData.name}
        </div>
    )
}

export default ComponentB