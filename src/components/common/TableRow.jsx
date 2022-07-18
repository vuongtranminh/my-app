import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
    const { children } = props;
    return <tr className="lt-table__row">{children}</tr>;
};

TableRow.propTypes = {
    children: PropTypes.any,
};

export default TableRow;
