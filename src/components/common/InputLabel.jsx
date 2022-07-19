import React, { useId } from 'react';
import PropTypes from 'prop-types';

const InputLabel = (props) => {
    const id = useId();
    return (
        <div className="lt-input-label">
            <input type="text" id={id} />
            <label htmlFor={id}>Bootstrap</label>
        </div>
    );
};

InputLabel.propTypes = {};

export default InputLabel;
