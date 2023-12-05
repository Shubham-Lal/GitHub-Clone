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
                            <div className='right-top-space' />
                            <h1 className='top-word-first'>
                                <span>Let’s build from here</span>
                            </h1>
                            <p className='top-word-second'>
                                The world’s leading AI-powered developer platform.
                            </p>
                            <div className='top-button-wrapper'>
                                <form className='signup-button-container'>
                                    <div className='signup-button-wrapper'>
                                        <div className='email-signup-wrapper'>
                                            <input className='email-signup-input' placeholder='Email address' />
                                        </div>
                                        <button type='button' className='email-signup-button'>
                                            Sign up for GitHub
                                        </button>
                                    </div>
                                </form>
                                <div className='top-button-separator' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campaign