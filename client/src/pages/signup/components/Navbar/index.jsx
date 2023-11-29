import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = ({ showSignin }) => {
    return (
        <header id='header-signup'>
            <div className='header__container'>
                <div className='header__wrapper'>
                    <Link to='/' style={{ display: 'inline-block', width: '32px', height: '32px', textDecoration: 'none' }}>
                        <img src='/images/logo.svg' alt='Logo' />
                    </Link>
                    {showSignin && (
                        <div className='signin__container'>
                            <span>Already have an account?</span>
                            <Link to='/login'>Sign in →</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar
