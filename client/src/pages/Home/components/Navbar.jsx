import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className='navbar__menu-desktop'>
                <div className='navbar__menu-left'>
                    <Link to="/">
                        <img className='github__logo' src='/images/logo.svg' alt='GitHub Logo' />
                    </Link>
                    <ul>
                        <li>
                            <span>Product</span>
                            <img src='/images/arrow.svg' alt='arrow' />
                            <div className='navbar__menu-links first'>
                                First
                            </div>
                        </li>
                        <li>
                            <span>Solutions</span>
                            <img src='/images/arrow.svg' alt='arrow' />
                            <div className='navbar__menu-links second'>
                                Second
                            </div>
                        </li>
                        <li>
                            <span>Open Source</span>
                            <img src='/images/arrow.svg' alt='arrow' />
                            <div className='navbar__menu-links third'>
                                Third
                            </div>
                        </li>
                        <li>
                            <span>Pricing</span>
                        </li>
                    </ul>
                </div>
                <div className='navbar__menu-right'>
                    <div className='navbar__search-container'>
                        <div className='navbar__search-wrapper'>
                            <div className='navbar__search-icon'>
                                <img src='/images/search.svg' alt='search' />
                            </div>
                            <span>Search or jump to...</span>
                            <img src='/images/slash.svg' alt='slash' />
                        </div>
                    </div>
                    <Link className='navbar__signin'>
                        Sign in
                    </Link>
                    <Link className='navbar__signup'>
                        Sign up
                    </Link>
                </div>
            </div>
            <div className='navbar__menu-medium'>
                <div className='navbar__menu-left'>
                    <Link className='navbar__signup'>
                        Sign up
                    </Link>
                </div>
                <Link className='navbar__menu-logo' to="/">
                    <img className='github__logo' src='/images/logo.svg' alt='GitHub Logo' />
                </Link>
                <div className='navbar__menu-right-medium'>
                    <div className='hamburger'>
                        <div className='hamburger__line' />
                        <div className='hamburger__line' />
                        <div className='hamburger__line' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar