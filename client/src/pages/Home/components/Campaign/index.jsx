import React from 'react'
import './style.css'

const Campaign = () => {
    return (
        <div className='campaign__container'>
            <img className='campaign__image-medium' src='/images/campaign-medium.webp' width='860' height='544' alt='Campaign Medium' />
            <img className='campaign__image-large' src='/images/campaign-large.webp' width='2236' height='1630' alt='Campaign Desktop' />
        </div>
    )
}

export default Campaign