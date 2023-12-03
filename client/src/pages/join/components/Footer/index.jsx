import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const JoinFooter = () => {
    return (
        <div className='join__footer-container'>
            <div className='join__footer-wrapper'>
                <div className='skip-link'>
                    <Link to='/'>
                        Skip personalization
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JoinFooter