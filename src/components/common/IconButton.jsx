import React from 'react';
import PropTypes from 'prop-types';

const IconButton = (props) => {
    return (
        <button className="lt-icon-button">
            <span className="lt-icon-button__wrapper">
                <span className="lt-icon-button__icon">{props.children}</span>
                {props.badge && <span className="lt-icon-button__badge">{props.badge}</span>}
            </span>
        </button>
    );
};

IconButton.propTypes = {
    children: PropTypes.any,
    badge: PropTypes.string,
};

export default IconButton;
