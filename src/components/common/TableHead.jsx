import React from 'react';
import PropTypes from 'prop-types';

const TableHead = (props) => {
    const { children } = props;
    return <thead className="lt-table__head">{children}</thead>;
};

TableHead.propTypes = {};

export default TableHead;
