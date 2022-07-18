import React from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {
    const { children, className } = props;
    return <td className={className}>{children}</td>;
};

TableCell.propTypes = {
    children: PropTypes.any,
};

export default TableCell;
