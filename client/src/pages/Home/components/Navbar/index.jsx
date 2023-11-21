import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowHeight from '../../../../hooks/useWindowHeight'
import './style.css'

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);


    const [searchInput, setSearchInput] = useState("");

    return (
        <header>
            <NavbarLarge openSearch={openSearch} setOpenSearch={setOpenSearch} />
            <NavbarMedium openSearch={openSearch} setOpenSearch={setOpenSearch} />

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

const NavbarLarge = ({ openSearch, setOpenSearch }) => {
    return (
        <div className='navbar__menu-desktop'>
            <div className='navbar__menu-left'>
                <Link to="/">
                    <img className='github__logo' src='/images/logo.svg' alt='GitHub Logo' />
                </Link>
                <ul>
                    <li>
                        <span>Product</span>
                        <img className='down-arrow' src='/images/arrow.svg' alt='arrow' />
                        <div className='navbar__menu-links first'>
                            <div className='product__left'>
                                <div className='sidebar__links-container'>
                                    <ul className='sidebar__links-top'>
                                        <li>
                                            <img src='/images/actions.svg' alt='Action' />
                                            <div className='sidebar__link-info'>
                                                <div>Actions</div>
                                                <div>Automate any workflow</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/packages.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Packages</div>
                                                <div>Host and manage packages</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/security.svg' alt='Packages' />
                                            <div className='sidebar__link-info'>
                                                <div>Security</div>
                                                <div>Find and fix vulnerabilities</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/codespaces.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Codespaces</div>
                                                <div>Instant dev environments</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/copilot.svg' alt='Packages' />
                                            <div className='sidebar__link-info'>
                                                <div>Copilot</div>
                                                <div>Write better code with AI</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/code-review.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Code review</div>
                                                <div>Manage code changes</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/issues.svg' alt='Packages' />
                                            <div className='sidebar__link-info'>
                                                <div>Issues</div>
                                                <div>Plan and track work</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/discussions.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Discussions</div>
                                                <div>Collaborate outside of code</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='product__right'>
                                <div className='sidebar__links-bottom'>
                                    <div>Explore</div>
                                    <ul>
                                        <li style={{ height: '33.5px' }}>
                                            <p>All features</p>
                                        </li>
                                        <li style={{ height: '34.25px' }}>
                                            <p>Documentation</p>
                                            <img src='/images/open-link.svg' alt='Open Link' />
                                        </li>
                                        <li style={{ height: '34.25px' }}>
                                            <p style={{ marginBottom: '1px' }}>GitHub Skills</p>
                                            <img src='/images/open-link.svg' alt='Open Link' />
                                        </li>
                                        <li style={{ height: '34.25px' }}>
                                            <p style={{ marginBottom: '1px' }}>Blog</p>
                                            <img src='/images/open-link.svg' alt='Open Link' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>Solutions</span>
                        <img className='down-arrow' src='/images/arrow.svg' alt='arrow' />
                        <div className='navbar__menu-links second'>
                            Second
                        </div>
                    </li>
                    <li>
                        <span>Open Source</span>
                        <img className='down-arrow' src='/images/arrow.svg' alt='arrow' />
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
    )
}

const NavbarMedium = ({ openSearch, setOpenSearch }) => {
    const { height, isReady } = useWindowHeight();

    const [openSidebar, setOpenSidebar] = useState(false);

    const [showProduct, setShowProduct] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [showOpenSrc, setShowOpenSrc] = useState(false);

    return (
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
                <div
                    className='sidebar__container'
                    style={{
                        height: `${height - 88}px`,
                        opacity: isReady ? 1 : 0,
                        transition: 'opacity 0.5s linear'
                    }}
                >
                    <div className='sidebar__top'>
                        <ul className='sidebar__top-wrapper'>
                            <li className='sidebar__top-link' onClick={() => {
                                setShowProduct(!showProduct);
                                setShowSolutions(false);
                                setShowOpenSrc(false);
                            }}>
                                <span>Product</span>
                                <img className={`arrow-right ${showProduct ? "animate-open" : "animate-close"}`} src='/images/arrow-sidebar.svg' alt='arrow' />
                            </li>
                            {showProduct && (
                                <div className='sidebar__links-container'>
                                    <ul className='sidebar__links-top'>
                                        <li>
                                            <img src='/images/actions.svg' alt='Action' />
                                            <div className='sidebar__link-info'>
                                                <div>Actions</div>
                                                <div>Automate any workflow</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/packages.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Packages</div>
                                                <div>Host and manage packages</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/security.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Security</div>
                                                <div>Find and fix vulnerabilities</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/codespaces.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Codespaces</div>
                                                <div>Instant dev environments</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/copilot.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Copilot</div>
                                                <div>Write better code with AI</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/code-review.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Code review</div>
                                                <div>Manage code changes</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/issues.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Issues</div>
                                                <div>Plan and track work</div>
                                            </div>
                                        </li>
                                        <li>
                                            <img src='/images/discussions.svg' alt='Packages' style={{ marginBottom: '1px' }} />
                                            <div className='sidebar__link-info'>
                                                <div>Discussions</div>
                                                <div>Collaborate outside of code</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='sidebar__links-bottom'>
                                        <div>Explore</div>
                                        <ul>
                                            <li><p>All features</p></li>
                                            <li>
                                                <p>Documentation</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                            <li>
                                                <p>GitHub Skills</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                            <li>
                                                <p>Blog</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <li className='sidebar__top-link' onClick={() => {
                                setShowProduct(false);
                                setShowSolutions(!showSolutions);
                                setShowOpenSrc(false);
                            }}>
                                <span>Solutions</span>
                                <img className={`arrow-right ${showSolutions ? "animate-open" : "animate-close"}`} src='/images/arrow-sidebar.svg' alt='arrow' />
                            </li>
                            {showSolutions && (
                                <div className='solutions__container'>
                                    <div className='solutions__wrapper'>
                                        <div>For</div>
                                        <ul>
                                            <li>
                                                <p>Enterprise</p>
                                            </li>
                                            <li>
                                                <p>Teams</p>
                                            </li>
                                            <li>
                                                <p>Startups</p>
                                            </li>
                                            <li style={{ height: '34.25px' }}>
                                                <p>Education</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='solutions__wrapper'>
                                        <div>By Solution</div>
                                        <ul>
                                            <li><p>CI/CD & Automation</p></li>
                                            <li style={{ height: '34.25px' }}>
                                                <p>DevOps</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                            <li style={{ height: '34.25px' }}>
                                                <p>DevSecOps</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='solutions__wrapper' style={{ paddingBottom: 0, marginBottom: 0, borderBottom: 'none' }}>
                                        <div>Resources</div>
                                        <ul>
                                            <li style={{ height: '34.25px' }}>
                                                <p>Learning Pathways</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                            <li style={{ height: '34.25px' }}>
                                                <p>White papers, Ebooks, Webinars</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                            <li>
                                                <p>Customer Stories</p>
                                            </li>
                                            <li style={{ height: '34.25px' }}>
                                                <p>Partners</p>
                                                <img src='/images/open-link.svg' alt='Open Link' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <li className='sidebar__top-link' onClick={() => {
                                setShowProduct(false);
                                setShowSolutions(false);
                                setShowOpenSrc(!showOpenSrc);
                            }}>
                                <span>Open Source</span>
                                <img className={`arrow-right ${showOpenSrc ? "animate-open" : "animate-close"}`} src='/images/arrow-sidebar.svg' alt='arrow' />
                            </li>
                            {showOpenSrc && (
                                <div className='source__container'>
                                    <div className='source__top'>
                                        <ul>
                                            <li>
                                                <div>
                                                    <p>GitHub Sponsors</p>
                                                    <p>Fund open source developers</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='source__top'>
                                        <ul>
                                            <li>
                                                <p>The ReadME Project</p>
                                                <p>GitHub community articles</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='source__bottom'>
                                        <p>Repositories</p>
                                        <ul>
                                            <li>Topics</li>
                                            <li>Trending</li>
                                            <li>Collections</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <li className='sidebar__top-link'>
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
                            <Link to="/">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar