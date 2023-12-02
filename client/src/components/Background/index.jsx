import React from 'react'
import './style.css'

const Background = () => {
    return (
        <>
            <img
                className='glow-image'
                src='/images/glow.svg'
                alt='Background'
            />
            <div className='stars__container'>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
            </div>
        </>
    )
}

export default Background