import React from 'react'
import Line from '../../../../components/Line'
import './style.css'

const Campaign = () => {
    return (
        <>
            <div className='campaign__image'>
                <img className='campaign__image-medium' src='/images/campaign-medium.webp' width='860' height='544' alt='Campaign Medium' />
                <img className='campaign__image-large' src='/images/campaign-large.webp' width='2236' height='1630' alt='Campaign Desktop' />
            </div>
            <div style={{ padding: '0 16px' }}>
                <div className='campaign__container'>
                    <div className='campaign__wrapper'>
                        <div className='campaign__left'>
                            <div className='circle__container'>
                                <div className='circle__dot' />
                            </div>
                            <Line background='one' />
                            <div className='bracket__container'>
                                <div className='bracket__wrapper'>
                                    <img src='/images/bracket.svg' alt='Bracket' />
                                    <div className='bracket__shadow' />
                                </div>
                            </div>
                            <Line background='two' />
                        </div>
                        <div className='campaign__right'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campaign