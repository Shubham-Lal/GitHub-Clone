import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    const [searchInput, setSearchInput] = useState("");

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
                        <div className='navbar__search-wrapper' onClick={() => setOpenSearch(!openSearch)}>
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
                    <div className='hamburger' onClick={() => setOpenSidebar(!openSidebar)}>
                        <div className={`hamburger__line ${openSidebar && "animate"}`} />
                        <div className={`hamburger__line ${openSidebar && "animate"}`} />
                        <div className={`hamburger__line ${openSidebar && "animate"}`} />
                    </div>
                </div>

                {openSidebar && (
                    <div className='sidebar__container'>
                        <div className='sidebar__top'>
                            <ul>
                                <li>
                                    <span>Product</span>
                                    <img src='/images/arrow-sidebar.svg' alt='arrow' />
                                </li>
                                <li>
                                    <span>Solutions</span>
                                    <img src='/images/arrow-sidebar.svg' alt='arrow' />
                                </li>
                                <li>
                                    <span>Open Source</span>
                                    <img src='/images/arrow-sidebar.svg' alt='arrow' />
                                </li>
                                <li>
                                    <span>Pricing</span>
                                </li>
                            </ul>
                        </div>
                        <div className='sidebar__bottom'>
                            <div className='navbar__search-container'>
                                <div className='navbar__search-wrapper' onClick={() => setOpenSearch(!openSearch)}>
                                    <div className='navbar__search-icon'>
                                        <img src='/images/search.svg' alt='search' />
                                    </div>
                                    <span>Search or jump to...</span>
                                    <img src='/images/slash.svg' alt='slash' />
                                </div>
                            </div>
                            <div className='sidebar__signin'>
                                Sign in
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {openSearch && (
                <div className='search__modal'>
                    <div className='search__input-container'>
                        <div className='search__input-wrapper'>
                            <div className='search__image-icon'>
                                <img src='/images/search.svg' />
                            </div>
                            <input
                                className='search__input-box'
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className='search__syntax-tips'>
                        Search syntax tips
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar