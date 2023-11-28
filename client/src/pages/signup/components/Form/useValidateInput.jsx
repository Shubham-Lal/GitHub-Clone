export const useValidateInput = () => {
    const validateEmail = (email, setProceed, setError, setShowError) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            setProceed(2);
            setError("");
            setShowError(false);
        } else {
            setProceed(1);
            setError("Email is invalid or already taken");
            setShowError(true);
        }
    };

    const validatePassword = (password, setProceed, setError, setShowError) => {
        const reLength = /.{15,}|.{8,}[0-9a-z]/;
        const reNumberLower = /[0-9].*[a-z]|[a-z].*[0-9]/;

        if (!reLength.test(password)) {
            setProceed(1);
            setError("Password is too short");
            setShowError(true);
        } else if (!reNumberLower.test(password)) {
            setProceed(1);
            setError("Password needs a number and lowercase letter");
            setShowError(true);
        } else {
            setProceed(2);
            setError("Password is strong");
            setShowError(false);
        }
    };

    const validateUsername = (username, setProceed, setError, setShowError) => {
        if (username) {
            setProceed(2);
            setError("Available");
            setShowError(false);
        }
        else {
            setProceed(1);
            setShowError(true);
        }
    };

    return { validateEmail, validatePassword, validateUsername };
}