import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const SignupFooter = () => {
    return (
        <footer className='footer__container'>
            <div className='footer__wrapper'>
                <p>
                    By creating an account, you agree to the <Link>Terms of Service</Link>
                    . For more information about GitHub's privacy practices, see the <Link>GitHub Privacy Statement</Link>
                    . We'll occasionally send you account-related emails.
                </p>
            </div>
        </footer>
    )
}

export const WelcomeFooter = () => {
    return (
        <div className='welcome__footer-container'>
            <div className='welcome__footer-wrapper'>
                <div className='skip-link'>
                    <Link to='/'>
                        Skip personalization
                    </Link>
                </div>
            </div>
        </div>
    )
}