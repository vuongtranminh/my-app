import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images/svgs';

const Dialog = (props) => {
    const { open, onOpen, children, defaultClose = false, backdropClose = false } = props;

    useEffect(() => {
        if (backdropClose) {
            document.addEventListener(
                'click',
                (e) => {
                    if (e.target.matches('.lt-overlay') && !e.target.closest('.lt-dialog')) {
                        onOpen(false);
                    }
                },
                false,
            );
        }
        return () => {
            document.removeEventListener('click', null);
        };
    }, []);

    const handleOpen = () => {
        onOpen(false);
    };

    return (
        <div className={`lt-overlay ${open && 'active'}`}>
            <div className="lt-dialog">
                {defaultClose && (
                    <span className="lt-dialog__close" onClick={handleOpen}>
                        <img src={images.x} />
                    </span>
                )}
                {children}
            </div>
        </div>
    );
};

Dialog.propTypes = {
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    children: PropTypes.any,
    defaultClose: PropTypes.bool,
    backdropClose: PropTypes.bool,
};

export const DialogTitle = (props) => {
    return <div className="lt-dialog__title">{props.children}</div>;
};

DialogTitle.propTypes = {
    children: PropTypes.any,
};

export const DialogContent = (props) => {
    return <div className="lt-dialog__content">{props.children}</div>;
};

DialogContent.propTypes = {
    children: PropTypes.any,
};

export const DialogActions = (props) => {
    return <div className="lt-dialog__actions">{props.children}</div>;
};

DialogActions.propTypes = {
    children: PropTypes.any,
};

export default Dialog;
