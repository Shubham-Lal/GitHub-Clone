import React, { useState } from 'react'
import TypeIt from 'typeit-react'
import './style.css'

const Form = () => {
    const [isTypingCompleted, setIsTypingCompleted] = useState(false);
    const [inputStage, setInputStage] = useState(1);

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
                        <>
                            <div className='input__wrapper' style={{ marginTop: '26px' }}>
                                <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                    <label htmlFor='email'>Enter your email*</label>
                                </div>
                                <div className='input__box-container'>
                                    <div className='input__box-wrapper'>
                                        <span className='right__arrow'>→</span>
                                        <input id='email' className='input__tag' autoFocus={true} />
                                    </div>
                                    <button
                                        className='continue__button'
                                        style={{ visibility: inputStage === 1 ? 'visible' : 'hidden' }}
                                        onClick={() => setInputStage(2)}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                            {inputStage !== 1 && (
                                <div className='input__wrapper' style={{ marginTop: '23px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                        <label htmlFor='password'>Create a password*</label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='input__box-wrapper'>
                                            <span className='right__arrow'>→</span>
                                            <input id='password' className='input__tag' autoFocus={true} />
                                        </div>
                                        <button
                                            className='continue__button'
                                            style={{ visibility: inputStage === 2 ? 'visible' : 'hidden' }}
                                            onClick={() => setInputStage(3)}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {(inputStage !== 1 && inputStage !== 2) && (
                                <div className='input__wrapper' style={{ marginTop: '24px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                        <label htmlFor='username'>Enter a username*</label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='input__box-wrapper'>
                                            <span className='right__arrow'>→</span>
                                            <input id='username' className='input__tag' autoFocus={true} />
                                        </div>
                                        <button
                                            className='continue__button'
                                            style={{ visibility: inputStage === 3 ? 'visible' : 'hidden' }}
                                            onClick={() => setInputStage(4)}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {inputStage === 4 && (
                                <div className='input__wrapper' style={{ marginTop: '23px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', minHeight: '76.5px', marginBottom: '8px' }}>
                                        <label htmlFor='notification'>
                                            Would you like to receive product updates and announcements via email?<br />
                                            Type "y" for yes or "n" for no
                                        </label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='input__box-wrapper'>
                                            <span className='right__arrow'>→</span>
                                            <input id='notification' className='input__tag' autoFocus={true} />
                                        </div>
                                        <button
                                            className='continue__button'
                                            onClick={() => { }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Form