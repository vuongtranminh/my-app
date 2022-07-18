import React from 'react';
import PropTypes from 'prop-types';

const TableFooter = (props) => {
    const { children } = props;
    return <tfoot className="lt-table__foot">{children}</tfoot>;
};

TableFooter.propTypes = {};

export default TableFooter;
