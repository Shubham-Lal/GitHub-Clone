import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../../../data/Images'
import './style.css'

const Footer = () => {
    return (
        <>
            <FooterTop />
            <FooterBottom />
        </>
    )
}

const FooterTop = () => {
    return (
        <div className='footer__top-container'>
            <div className='footer__top-wrapper'>
                <div className='newsletter__container'>
                    <Link to='/' style={{ display: 'inline-block', width: '84px', height: '30px' }}>
                        <img src='/images/github.svg' alt='GitHub' />
                    </Link>
                    <div>
                        <h2>Subscribe to our developer newsletter</h2>
                        <p>Get tips, technical guides, and best practices. Once a month. Right in your inbox.</p>
                    </div>
                    <Link className='subscribe-button'>
                        Subscribe
                    </Link>
                </div>
                <div className="permalinks__container product">
                    <h2>Product</h2>
                    <ul>
                        <li>
                            <a href=''>Features</a>
                        </li>
                        <li>
                            <a href=''>Enterprise</a>
                        </li>
                        <li>
                            <a href=''>Copilot</a>
                        </li>
                        <li>
                            <a href=''>Security</a>
                        </li>
                        <li>
                            <a href=''>Pricing</a>
                        </li>
                        <li>
                            <a href=''>Team</a>
                        </li>
                        <li>
                            <a href=''>Resources</a>
                        </li>
                        <li>
                            <a href=''>Roadmap</a>
                        </li>
                        <li>
                            <a href=''>Compare GitHub</a>
                        </li>
                    </ul>
                </div>
                <div className="permalinks__container platform">
                    <h2>Platform</h2>
                    <ul>
                        <li>
                            <a href=''>Developer API</a>
                        </li>
                        <li>
                            <a href=''>Partners</a>
                        </li>
                        <li>
                            <a href=''>Electron</a>
                        </li>
                        <li>
                            <a href=''>GitHub Desktop</a>
                        </li>
                    </ul>
                </div>
                <div className="permalinks__container support">
                    <h2>Support</h2>
                    <ul>
                        <li>
                            <a href=''>Docs</a>
                        </li>
                        <li>
                            <a href=''>Community Forum</a>
                        </li>
                        <li>
                            <a href=''>Professional Services</a>
                        </li>
                        <li>
                            <a href=''>Premium Support</a>
                        </li>
                        <li>
                            <a href=''>Skills</a>
                        </li>
                        <li>
                            <a href=''>Status</a>
                        </li>
                        <li>
                            <a href=''>Contact GitHub</a>
                        </li>
                    </ul>
                </div>
                <div className="permalinks__container company">
                    <h2>Company</h2>
                    <ul>
                        <li>
                            <a href=''>About</a>
                        </li>
                        <li>
                            <a href=''>Customer stories</a>
                        </li>
                        <li>
                            <a href=''>Blog</a>
                        </li>
                        <li>
                            <a href=''>The ReadME Project</a>
                        </li>
                        <li>
                            <a href=''>Careers</a>
                        </li>
                        <li>
                            <a href=''>Press</a>
                        </li>
                        <li>
                            <a href=''>Inclusion</a>
                        </li>
                        <li>
                            <a href=''>Social Impact</a>
                        </li>
                        <li>
                            <a href=''>Shop</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const FooterBottom = () => {
    return (
        <div className='footer__bottom-container'>
            <div className='footer__bottom-wrapper'>
                <ul className='company-links'>
                    <li style={{ width: '16px', height: '16px' }}>
                        <a href='https://x.com/github' target='_blank'>
                            <img src={Images['X']} width={16} height={16} alt='X' />
                        </a>
                    </li>
                    <li style={{ width: '18px', height: '18px' }}>
                        <a href='https://www.facebook.cook/GitHub' target='_blank'>
                            <img src={Images['Facebook']} width={18} height={18} alt='Facebook' />
                        </a>
                    </li>
                    <li style={{ width: '19px', height: '18px', alignSelf: 'flex-start' }}>
                        <a href='https://www.linkedin.com/company/github' target='_blank'>
                            <img src={Images['LinkedIn']} width={19} height={18} alt='LinkedIn' />
                        </a>
                    </li>
                    <li style={{ width: '23px', height: '16px' }}>
                        <a href='https://www.youtube.com/github' target='_blank'>
                            <img src={Images['Youtube']} width={23} height={16} alt='Youtube' />
                        </a>
                    </li>
                    <li style={{ width: '18px', height: '18px' }}>
                        <a href='https://www.twitch.tv/github' target='_blank'>
                            <img src={Images['Twitch']} width={18} height={18} alt='Twitch' />
                        </a>
                    </li>
                    <li style={{ width: '18px', height: '18px' }}>
                        <a href='https://www.tiktok.com/@github' target='_blank'>
                            <img src={Images['TikTok']} width={18} height={18} alt='Tiktok' />
                        </a>
                    </li>
                    <li style={{ width: '20px', height: '20px' }}>
                        <a href='https://github.com/github' target='_blank'>
                            <img src={Images['GitHub']} width={20} height={20} alt='GitHub' />
                        </a>
                    </li>
                </ul>
                <ul className='extra-links'>
                    <li>© 2023 GitHub, Inc.</li>
                    <li><a href='' target='_blank'>Terms</a></li>
                    <li>
                        <a href='' target='_blank' style={{ paddingRight: '0' }}>Privacy</a> (
                        <a href='' target='_blank'>Updated 08/2022</a>)
                    </li>
                    <li><a href='' target='_blank'>Sitemap</a></li>
                    <li><a href='' target='_blank'>What is Git?</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer