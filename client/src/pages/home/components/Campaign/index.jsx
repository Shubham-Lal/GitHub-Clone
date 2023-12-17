import React from 'react'
import { Link } from 'react-router-dom'
import Line from '../../../../components/Line'
import './style.css'

const Campaign = () => {
    return (
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
                            <span>Let’s build from here</span>
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
                            <Link className='trial-button'>
                                Start a free enterprise trial
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                            </Link>
                        </div>
                        <div className='company__container'>
                            <p>Trusted by the world’s leading organizations ↘︎</p>
                            <div className='company-image-container'>
                                {companyImages.slice(0, 2).map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.img}
                                        height={item.height}
                                        className='company-image'
                                    />
                                ))}
                                <div className='image-first-seperator' />
                                {companyImages.slice(2, 4).map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.img}
                                        height={item.height}
                                        className='company-image'
                                    />
                                ))}
                                <div className='image-second-seperator' />
                                {companyImages.slice(4, 6).map((item, i) => (
                                    <img
                                        key={i}
                                        src={item.img}
                                        height={item.height}
                                        className='company-image'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const companyImages = [
    {
        id: 1,
        img: '/images/company/3M.svg',
        height: 48
    },
    {
        id: 2,
        img: '/images/company/KPMG.svg',
        height: 40
    },
    {
        id: 3,
        img: '/images/company/Mercedes.svg',
        height: 44
    },
    {
        id: 4,
        img: '/images/company/SAP.svg',
        height: 44
    },
    {
        id: 5,
        img: '/images/company/P&G.svg',
        height: 32
    },
    {
        id: 6,
        img: '/images/company/Telus.svg',
        height: 32
    },
]

export default Campaign