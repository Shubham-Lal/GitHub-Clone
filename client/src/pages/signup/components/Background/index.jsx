import React from 'react'
import Images from '../../../../data/Images'
import './style.css'

const Background = () => {
    return (
        <>
            <img
                className='glow-image'
                src={Images['Glow']}
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