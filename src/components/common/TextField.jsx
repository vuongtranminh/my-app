import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isString } from '~/utils';

const TextField = (props) => {
    const { label, rules, error, ...otherProps } = props;

    const [errorMessage, setErrorMessage] = useState(error);

    useEffect(() => {
        console.log('error change');
        setErrorMessage(error);
    }, [error]);

    const handleBlur = (e) => {
        validateInput(e.target.value);
    };

    const handleFocus = () => {
        setErrorMessage('');
    };

    const validateInput = (value) => {
        let error = '';
        for (const rule of rules) {
            error = rule(value);
            if (isString(error)) break;
        }
        setErrorMessage(error);
    };

    return (
        <div className="text-field">
            <div className="text-field__input">
                <input placeholder=" " {...otherProps} onBlur={handleBlur} onFocus={handleFocus} />
                <label>{label}</label>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    rules: PropTypes.any,
    error: PropTypes.any,
};

export default TextField;
