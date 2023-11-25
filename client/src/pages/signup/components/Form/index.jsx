import React, { useState } from 'react'
import TypeIt from 'typeit-react'
import './style.css'

const Form = () => {
    const [isTypingCompleted, setIsTypingCompleted] = useState(false);

    return (
        <div className='signup__form'>
            <div className='form__container'>
                <div className='form__wrapper'>
                    <TypeIt style={{ display: 'inline-block', height: '25.5px', marginTop: '1px' }} className='typing__text' options={{
                        startDelay: 3000,
                        speed: 25,
                        afterComplete: (instance) => {
                            setIsTypingCompleted(true);
                            instance.destroy();
                        },
                        cursor: {
                            autoPause: false,
                            animation: {
                                options: {
                                    duration: 700,
                                    easing: "linear",
                                },
                                frames: [
                                    {
                                        opacity: 1
                                    },
                                    {
                                        opacity: 0
                                    },
                                    {
                                        opacity: 1
                                    },
                                ],
                            }
                        }
                    }}>
                        <span>Welcome to GitHub!</span><br /><span>Let’s begin the adventure</span>
                    </TypeIt>
                    {isTypingCompleted && (
                        <div className='input__wrapper'>
                            <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                <label htmlFor='email' className='email__label'>Enter your email*</label>
                            </div>
                            <div className='input__box-container'>
                                <div className='input__box-wrapper'>
                                    <span className='right__arrow'>→</span>
                                    <input id='email' className='input__tag' autoFocus={true} />
                                </div>
                                <button className='continue__button'>
                                    Continue
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Form