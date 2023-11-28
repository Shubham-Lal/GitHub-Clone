import React from 'react'
import { useValidateInput } from './useValidateInput';

const Input = ({ id, timer, setTimer, showContinue, value, setValue, setError, setProceed, setShowError, handleFocus, handleBlur }) => {
    const { validateEmail, validatePassword, validateUsername } = useValidateInput();

    return (
        <input
            id={id}
            type={id === 'password' ? "password" : "text"}
            className='input__tag'
            style={{ borderColor: `${showContinue === 1 && id === 'email' || showContinue === 2 && id === 'password' || showContinue === 3 && id === 'username' ? "#0969da" : "transparent"}` }}
            autoFocus={true}
            value={value}
            onChange={e => {
                setValue(e.target.value);
                clearTimeout(timer);
                setTimer(setTimeout(() => {
                    if (id === 'email') validateEmail(e.target.value, setProceed, setError, setShowError);
                    else if (id === 'password') validatePassword(e.target.value, setProceed, setError, setShowError);
                    else if (id === 'username') validateUsername(e.target.value, setProceed, setError, setShowError);
                }, 1000));
            }}
            onFocus={() => handleFocus(id)}
            onBlur={() => handleBlur(id)}
        />
    )
}

export default Input