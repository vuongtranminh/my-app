import React, { forwardRef, useId, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { isString } from '~/utils';

const InputLabel = forwardRef((props, ref) => {
    const id = useId();
    const { label, rules, onChange, value, ...otherProps } = props;

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setError('');
        onChange(e);
    };

    const validate = () => {
        if (rules) {
            let error = '';
            for (const rule of rules) {
                error = rule(value);
                if (isString(error)) {
                    setError(error);
                    return false;
                }
            }
        }

        return true;
    };

    useImperativeHandle(ref, () => {
        return {
            validate: () => validate(),
        };
    });

    const handleBlur = () => {
        validate();
    };
    return (
        <div className="lt-input-label">
            <input type="text" id={id} {...otherProps} onChange={handleChange} onBlur={handleBlur} value={value} />
            <label htmlFor={id}>{label}</label>
            {error && <span>{error}</span>}
        </div>
    );
});

InputLabel.propTypes = {};

InputLabel.displayName = 'InputLabel';

export default InputLabel;
