import React from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {
    const { children, align = 'start', component = 'td', className, ...otherProps } = props;
    return component === 'td' ? (
        <td className={`lt-table__cell lt-table__cell--${align} ${className}`} {...otherProps}>
            {children}
        </td>
    ) : (
        <th className={`lt-table__cell lt-table__cell--${align} ${className}`} {...otherProps}>
            {children}
        </th>
    );
};

TableCell.propTypes = {
    children: PropTypes.any,
};

export default TableCell;
