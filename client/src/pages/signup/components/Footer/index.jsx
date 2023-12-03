import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const SignupFooter = () => {
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

export default SignupFooter