import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = props => {

    const history = useHistory()
    localStorage.clear()
    history.push('/auth')
    return(
        <>

        </>
    )
}

export default Logout