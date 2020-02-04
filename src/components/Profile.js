import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Profile = props => {

    const { user } = useContext(UserContext)
    console.log(user)
    return (
        <>
            <h2>Profile</h2>
        </>
    )
}

export default Profile