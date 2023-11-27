import React, { useState } from 'react'
import TypeIt from 'typeit-react'
import Input from './Input';
import './style.css'

const Form = () => {
    const [isTypingCompleted, setIsTypingCompleted] = useState(false);
    const [inputStage, setInputStage] = useState(1);

    const [timer, setTimer] = useState(null);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailProceed, setEmailProceed] = useState(1);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordProceed, setPasswordProceed] = useState(1);

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [usernameProceed, setUsernameProceed] = useState(1);

    const [notification, setNotification] = useState("");
    const [notificationError, setNotificationError] = useState("");
    const [notificationProceed, setNotificationProceed] = useState(1);

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
                                        {emailProceed === 0 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✕</span>
                                            : emailProceed === 2 && inputStage !== 1 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                                : <span className='right__arrow'>→</span>
                                        }
                                        <Input
                                            id="email"
                                            timer={timer}
                                            setTimer={setTimer}
                                            value={email}
                                            setValue={setEmail}
                                            setError={setEmailError}
                                            setProceed={setEmailProceed}
                                        />
                                    </div>
                                    <button
                                        className={`continue__button ${email && emailProceed === 2 && "proceed"} ${inputStage !== 1 && "hidden"}`}
                                        onClick={() => {
                                            if (email && emailProceed === 2) setInputStage(2);
                                        }}
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
                                            {passwordProceed === 0 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✕</span>
                                                : passwordProceed === 2 && inputStage !== 2 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                                    : <span className='right__arrow'>→</span>
                                            }
                                            <Input
                                                id="password"
                                                timer={timer}
                                                setTimer={setTimer}
                                                value={password}
                                                setValue={setPassword}
                                                setError={setPasswordError}
                                                setProceed={setPasswordProceed}
                                            />
                                        </div>
                                        <button
                                            className={`continue__button ${password && passwordProceed === 2 && "proceed"} ${inputStage !== 2 && "hidden"}`}
                                            onClick={() => {
                                                if (password && passwordProceed === 2) setInputStage(3);
                                            }}
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
                                            {usernameProceed === 0 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✕</span>
                                                : usernameProceed === 2 && inputStage !== 3 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                                    : <span className='right__arrow'>→</span>
                                            }
                                            <Input
                                                id="username"
                                                timer={timer}
                                                setTimer={setTimer}
                                                value={username}
                                                setValue={setUsername}
                                                setError={setUsernameError}
                                                setProceed={setUsernameProceed}
                                            />
                                        </div>
                                        <button
                                            className={`continue__button ${username && usernameProceed === 2 && "proceed"} ${inputStage !== 3 && "hidden"}`}
                                            onClick={() => {
                                                if (username && usernameProceed === 2) setInputStage(4);
                                            }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {(inputStage !== 1 && inputStage !== 2 && inputStage !== 3) && (
                                <div className='input__wrapper' style={{ marginTop: '23px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', minHeight: '76.5px', marginBottom: '8px' }}>
                                        <label htmlFor='notification'>
                                            Would you like to receive product updates and announcements via email?<br />
                                            Type "y" for yes or "n" for no
                                        </label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='input__box-wrapper'>
                                            {notificationProceed === 0 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✕</span>
                                                : notificationProceed === 2 && inputStage !== 4 ? <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                                    : <span className='right__arrow'>→</span>
                                            }
                                            <Input
                                                id="notification"
                                                timer={timer}
                                                setTimer={setTimer}
                                                value={notification}
                                                setValue={setNotification}
                                                setError={setNotificationError}
                                                setProceed={setNotificationProceed}
                                            />
                                        </div>
                                        <button
                                            className={`continue__button ${notification && notificationProceed === 2 && "proceed"} ${inputStage !== 4 && "hidden"}`}
                                            onClick={() => {
                                                if (notification && notificationProceed === 2) setInputStage(5);
                                            }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {inputStage === 5 && (
                                <button className='create__account'>Create account</button>
                            )}
                        </>
                    )}
                </div>
                <div className="hint__wrapper">
                    {inputStage === 1 && email && emailError && (
                        <p className='error-message'>{emailError}</p>
                    )}
                    {inputStage === 2 && password && passwordError && (
                        <>
                            <div
                                className='error-indicator'>
                                <span className={`${passwordError === 'Password is too short' ? "danger" : passwordError === 'Password needs a number and lowercase letter' ? "warn" : passwordError === 'Password is strong' && "success"}`} />
                                &nbsp;
                                <span className={`${passwordError === 'Password needs a number and lowercase letter' ? "warn" : passwordError === 'Password is strong' && "success"}`} />
                                &nbsp;
                                <span className={`${passwordError === 'Password is strong' && "success"}`} />
                            </div>
                            <p className={`short-error ${passwordError === 'Password is too short'
                                ? "danger"
                                : passwordError === 'Password needs a number and lowercase letter'
                                    ? "warn"
                                    : passwordError === 'Password is strong'
                                    && "success"}`}
                            >
                                {passwordError}
                            </p>
                            <p className='error-message'>
                                Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.
                            </p>
                        </>
                    )}
                    {inputStage === 3 && username && usernameError && (
                        <p className='error-message'>
                            {usernameError === "Available" ? `${username} is available.` : `Username ${username} is not available.`}
                        </p>
                    )}
                    {inputStage === 4 && notification && notificationError && (
                        <p className='error-message'>
                            {notificationError}
                        </p>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Form