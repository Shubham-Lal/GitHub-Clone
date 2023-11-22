import React from 'react'
import './style.css'

const Line = ({ background }) => {
    return (
        <div className={`line ${background}`} style={{ height: '32.4vh' }} />
    )
}

export default Line