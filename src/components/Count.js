import React from 'react'
import { useState } from 'react'
import Header from './Header'

function Count({ count, handleClickCount }) {
    return (
        <div>
            <label >{count}</label>
            <button onClick={handleClickCount}>+</button>
        </div>
    )
}

export default Count