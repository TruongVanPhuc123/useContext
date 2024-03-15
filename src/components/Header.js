import React from 'react'
import { AppContext } from '../context/AppContext'

function Header() {
    const { data } = React.useContext(AppContext)

    return (
        <div >
            {data.username}
            {data.password}
        </div>
    )
}

export default Header