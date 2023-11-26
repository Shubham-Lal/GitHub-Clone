import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <header id='header-signup'>
            <div className='header__container'>
                <div className='header__wrapper'>
                    <a href='/' style={{ display: 'inline-block', width: '32px', height: '32px', textDecoration: 'none' }}>
                        <img src='/images/logo.svg' alt='Logo' />
                    </a>
                    <div className='signin__container'>
                        <span>Already have an account?</span>
                        <a href='/login'>Sign in →</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
