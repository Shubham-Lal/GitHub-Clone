import React from 'react'
import './style.css'

const Line = ({ background }) => {
    return (
        <div className={`line ${background}`} />
    )
}

export default Line