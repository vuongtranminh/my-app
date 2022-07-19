import React from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images/svgs';

const Dialog = (props) => {
    const { open, onOpen, children } = props;
    return (
        <div className="lt-overlay">
            <div className="lt-dialog">
                <span className="lt-dialog__close">
                    <img src={images.x} />
                </span>
                {children}
            </div>
        </div>
    );
};

Dialog.propTypes = {};

export const DialogTitle = (props) => {
    return <div className="lt-dialog__title">{props.children}</div>;
};

DialogTitle.propTypes = {};

export const DialogContent = (props) => {
    return <div className="lt-dialog__content">{props.children}</div>;
};

DialogContent.propTypes = {};

export const DialogActions = (props) => {
    return <div className="lt-dialog__actions">{props.children}</div>;
};

DialogActions.propTypes = {};

export default Dialog;
