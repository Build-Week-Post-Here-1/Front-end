import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = props => {

    const history = useHistory()
    localStorage.removeItem('jwtToken')
    history.push('/')
    return(
        <>

        </>
    )
}

export default Logout