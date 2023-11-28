import React from 'react'
import { useValidateInput } from './useValidateInput';

const Input = ({ id, timer, setTimer, value, setValue, setError, setProceed, setShowError, handleFocus, handleBlur }) => {
    const { validateEmail, validatePassword, validateUsername } = useValidateInput();

    return (
        <input
            id={id}
            type={id === 'password' ? "password" : "text"}
            className='input__tag'
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