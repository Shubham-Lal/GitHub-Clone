import React from 'react'

const Input = ({ id, timer, setTimer, value, setValue, setError, setProceed }) => {
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            setProceed(2);
            setError("");
        } else {
            setProceed(1);
            setError("Email is invalid or already taken");
        }
    };

    const validatePassword = (password) => {
        const reLength = /.{15,}|.{8,}[0-9a-z]/;
        const reNumberLower = /[0-9].*[a-z]|[a-z].*[0-9]/;

        if (!reLength.test(password)) {
            setProceed(1);
            setError("Password is too short");
        } else if (!reNumberLower.test(password)) {
            setProceed(1);
            setError("Password needs a number and lowercase letter");
        } else {
            setProceed(2);
            setError("Password is strong");
        }
    };

    const validateUsername = (username) => {
        if (username) {
            setProceed(2);
            setError("Available");
        }
        else {
            setProceed(1);
        }
    };

    const validateNotification = (notification) => {
        const value = notification.toLowerCase();
        if (value === 'y' || value === 'n') {
            setProceed(2);
            setValue(value);
        }
        else {
            setProceed(1);
            setError(`Type "y" for yes or "n" for no`);
        }
    };

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
                    if (id === 'email') validateEmail(e.target.value);
                    else if (id === 'password') validatePassword(e.target.value);
                    else if (id === 'username') validateUsername(e.target.value);
                    else if (id === 'notification') validateNotification(e.target.value);
                }, 1000));
            }}
        />
    )
}

export default Input