import React from 'react'
import Images from '../../../../data/Images'
import './style.css'

const Footer = () => {
    return (
        <footer className='footer__container'>
            <div className='footer__top-container'>
                <div className='footer__top-wrapper'>

                </div>
            </div>
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
        </footer>
    )
}

export default Footer