import React from 'react';
import PropTypes from 'prop-types';

const TableBody = (props) => {
    const { children } = props;
    return <tbody className="lt-table__body">{children}</tbody>;
};

TableBody.propTypes = {};

export default TableBody;
