import React from 'react'
import './style.css'

const Line = ({ background }) => {
    return (
        <div className={`line ${background}`} style={{ height: '257px' }} />
    )
}

export default Line