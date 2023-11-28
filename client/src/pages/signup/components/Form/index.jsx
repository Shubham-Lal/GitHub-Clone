import React, { useState } from 'react'
import TypeIt from 'typeit-react'
import { useValidateInput } from './useValidateInput';
import Input from './Input';
import './style.css'

const Form = () => {
    const { validateEmail, validatePassword, validateUsername } = useValidateInput();

    const [isTypingCompleted, setIsTypingCompleted] = useState(false);

    const [timer, setTimer] = useState(null);
    const [showContinue, setShowContinue] = useState(1);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailProceed, setEmailProceed] = useState(1);
    const [showEmailError, setShowEmailError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordProceed, setPasswordProceed] = useState(1);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const [showUsername, setShowUsername] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [usernameProceed, setUsernameProceed] = useState(1);
    const [showUsernameError, setShowUsernameError] = useState(false);

    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState("");

    const [showCreateAcc, setShowCreateAcc] = useState(false);

    const handleFocus = (id) => {
        if (id === "email") setShowContinue(1);
        else if (id === "password") setShowContinue(2);
        else if (id === "username") setShowContinue(3);
    }

    const handleBlur = (id) => {
        if (id === 'email') validateEmail(email, setEmailProceed, setEmailError, setShowEmailError);
        else if (id === 'password') validatePassword(password, setPasswordProceed, setPasswordError, setShowPasswordError);
        else if (id === 'username') validateUsername(username, setUsernameProceed, setUsernameError, setShowUsernameError);
    }

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
                            <div className='input__wrapper' style={{ marginTop: '27.6px' }}>
                                <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                    <label htmlFor='email'>Enter your email*</label>
                                </div>
                                <div className='input__box-container'>
                                    <div className='input__box-wrapper'>
                                        {showContinue === 1 ? <span className='right__arrow'>→</span>
                                            : showEmailError ? <span className='right__arrow' style={{ color: '#d1242f' }}>✕</span>
                                                : <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                        }
                                        <Input
                                            id="email"
                                            timer={timer}
                                            setTimer={setTimer}
                                            showContinue={showContinue}
                                            value={email}
                                            setValue={setEmail}
                                            setError={setEmailError}
                                            setProceed={setEmailProceed}
                                            setShowError={setShowEmailError}
                                            handleFocus={handleFocus}
                                            handleBlur={handleBlur}
                                        />
                                    </div>
                                    <button
                                        className={`continue__button ${email && emailProceed === 2 && "proceed"} ${showContinue !== 1 && "hidden"}`}
                                        onClick={() => {
                                            if (email && emailProceed === 2) {
                                                setShowPassword(true);
                                                setShowContinue(2);
                                            }
                                        }}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                            {showPassword && (
                                <div className='input__wrapper' style={{ marginTop: '23px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                        <label htmlFor='password'>Create a password*</label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='input__box-wrapper'>
                                            {showContinue === 2 ? <span className='right__arrow'>→</span>
                                                : showPasswordError ? <span className='right__arrow' style={{ color: '#d1242f' }}>✕</span>
                                                    : <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                            }
                                            <Input
                                                id="password"
                                                timer={timer}
                                                setTimer={setTimer}
                                                showContinue={showContinue}
                                                value={password}
                                                setValue={setPassword}
                                                setError={setPasswordError}
                                                setProceed={setPasswordProceed}
                                                setShowError={setShowPasswordError}
                                                handleFocus={handleFocus}
                                                handleBlur={handleBlur}
                                            />
                                        </div>
                                        <button
                                            className={`continue__button ${password && passwordProceed === 2 && "proceed"} ${showContinue !== 2 && "hidden"}`}
                                            onClick={() => {
                                                if (password && passwordProceed === 2) {
                                                    setShowUsername(true);
                                                    setShowContinue(3);
                                                }
                                            }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {showUsername && (
                                <div className='input__wrapper' style={{ marginTop: '24px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', height: '25.5px' }}>
                                        <label htmlFor='username'>Enter a username*</label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='input__box-wrapper'>
                                            {showContinue === 3 ? <span className='right__arrow'>→</span>
                                                : showUsernameError ? <span className='right__arrow' style={{ color: '#d1242f' }}>✕</span>
                                                    : <span className='right__arrow' style={{ color: '#20bb3d' }}>✓</span>
                                            }
                                            <Input
                                                id="username"
                                                timer={timer}
                                                setTimer={setTimer}
                                                showContinue={showContinue}
                                                value={username}
                                                setValue={setUsername}
                                                setError={setUsernameError}
                                                setProceed={setUsernameProceed}
                                                setShowError={setShowUsernameError}
                                                handleFocus={handleFocus}
                                                handleBlur={handleBlur}
                                            />
                                        </div>
                                        <button
                                            className={`continue__button ${username && usernameProceed === 2 && "proceed"} ${showContinue !== 3 && "hidden"}`}
                                            onClick={() => {
                                                if (username && usernameProceed === 2) {
                                                    setShowNotification(true);
                                                    setShowContinue(4);
                                                }
                                            }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {showNotification && (
                                <div className='input__wrapper' style={{ marginTop: '23px' }}>
                                    <div style={{ display: 'inline-flex', width: '100%', marginBottom: '4px' }}>
                                        <label>
                                            Email preferences
                                        </label>
                                    </div>
                                    <div className='input__box-container'>
                                        <div className='notification__container'>
                                            <div style={{ position: 'relative' }}>
                                                <input
                                                    id='notification'
                                                    className='notification-checkbox'
                                                    type='checkbox'
                                                    checked={notification}
                                                    onChange={() => setNotification(!notification)}
                                                />
                                                <div className={`checkmark ${notification && "checked"}`}>✓</div>
                                            </div>
                                            <label htmlFor='notification' className='notification-label'>
                                                Receive occasional product updates and announcements.
                                            </label>
                                        </div>
                                        <button
                                            className={`continue__button proceed ${showContinue !== 4 && "hidden"}`}
                                            onClick={() => {
                                                setShowCreateAcc(true);
                                                setShowContinue(5);
                                            }}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            )}
                            {showCreateAcc && (
                                <button className={`create__account ${(email && emailProceed === 2) && (password && passwordProceed === 2) && (username && usernameProceed === 2) && "success"}`}>
                                    Create account
                                </button>
                            )}
                        </>
                    )}
                </div>
                <div className="hint__wrapper">
                    {showContinue === 1 && email && emailError && (
                        <p className='error-message'>{emailError}</p>
                    )}
                    {showContinue === 2 && password && passwordError && (
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
                    {showContinue === 3 && username && usernameError && (
                        <p className='error-message'>
                            {usernameError === "Available" ? `${username} is available.` : `Username ${username} is not available.`}
                        </p>
                    )}
                </div>
            </div >
        </div >
    )
}

export default Form