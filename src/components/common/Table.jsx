import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
    const { children, stickyHeader = false, className, ...otherProps } = props;
    return (
        <div className={`lt-table-wraper ${className}`} {...otherProps}>
            <table className={`lt-table ${stickyHeader && 'lt-table--sticky-header'}`}>{children}</table>
        </div>
    );
};

Table.propTypes = {};

export default Table;
