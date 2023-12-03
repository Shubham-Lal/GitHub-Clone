import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const OTP = () => {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(Array(8).fill(''));

    const handleChange = (target, idx) => {
        const updatedOtp = [...otp.slice(0, idx), target.value, ...otp.slice(idx + 1)];
        setOtp(updatedOtp);
        handleSubmitOTP(updatedOtp);
        const nextSibling = target.nextElementSibling;
        if (nextSibling && target.value) {
            nextSibling.focus();
        }
    };

    const handleSubmitOTP = (otp) => {
        if (otp.join('').length === 8) {
            console.log('OTP:', otp.join(''));
            navigate('/join/welcome');
        }
    };

    const handleKeyDown = (e, idx) => {
        if (e.key === 'Backspace' && !otp[idx]) {
            const prevSibling = e.target.previousElementSibling;
            if (prevSibling) {
                prevSibling.focus();
            }
        }
    };

    return (
        <div className='otp__container'>
            <div className='otp__wrapper'>
                <div className='otp__input-container'>
                    <p>You're almost done!</p>
                    <p style={{ marginBottom: '10px' }}>
                        We sent a launch code to
                        <span className='email'> im.shubhamlal@gmail.com</span>
                    </p>
                    <p>
                        <span className='arrow-right'></span> Enter code<sup>*</sup>
                    </p>
                    <div className='otp__input-wrapper'>
                        {otp.map((num, idx) => (
                            <input
                                className='input-box'
                                type='text'
                                name={`otp${idx}`}
                                key={idx}
                                value={num}
                                onChange={e => handleChange(e.target, idx)}
                                onKeyDown={e => handleKeyDown(e, idx)}
                                maxLength={1}
                            />
                        ))}
                    </div>
                </div>
                <div className='extras'>
                    Didn't get your email?{` `}
                    <button className='resend-otp'>Resend the code</button>
                    {` `}or{` `}
                    <Link to='/signup' className='update-email'>update your email address</Link>.
                </div>
            </div>
        </div>
    )
}

export default OTP