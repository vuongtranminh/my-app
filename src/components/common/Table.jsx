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

Table.propTypes = {
    children: PropTypes.any,
    stickyHeader: PropTypes.bool,
    className: PropTypes.string,
    otherProps: PropTypes.any,
};

export const TableHead = (props) => {
    const { children } = props;
    return <thead className="lt-table__head">{children}</thead>;
};

TableHead.propTypes = {
    children: PropTypes.any,
};

export const TableBody = (props) => {
    const { children } = props;
    return <tbody className="lt-table__body">{children}</tbody>;
};

TableBody.propTypes = {
    children: PropTypes.any,
};

export const TableFooter = (props) => {
    const { children } = props;
    return <tfoot className="lt-table__foot">{children}</tfoot>;
};

TableFooter.propTypes = {
    children: PropTypes.any,
};

export const TableRow = (props) => {
    const { children } = props;
    return <tr className="lt-table__row">{children}</tr>;
};

TableRow.propTypes = {
    children: PropTypes.any,
};

export const TableCell = (props) => {
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
    align: PropTypes.string,
    component: PropTypes.string,
    className: PropTypes.string,
    otherProps: PropTypes.any,
};

export default Table;
