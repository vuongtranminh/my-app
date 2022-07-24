import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    const { items, itemText, value, onClickOption } = props;
    const [isShowOption, setIsShowOption] = useState(false);

    const handleShowOption = () => {
        setIsShowOption(!isShowOption);
    };

    const handleClickOption = (value) => {
        setIsShowOption(false);
        onClickOption(value);
    };

    return (
        <div className="select-box">
            <div className={`options-container ${isShowOption && 'active'}`}>
                {items.map((item, index) => (
                    <div key={index} className="option" onClick={() => handleClickOption(item)}>
                        <label>{itemText ? item[itemText] : item}</label>
                    </div>
                ))}
            </div>

            <div className="selected" onClick={handleShowOption}>
                {value.icon && (
                    <span className="lt-select__selected__icon">
                        <img src={value.icon} />
                    </span>
                )}
                {itemText ? value[itemText] : value}
            </div>
        </div>
    );
};

Select.propTypes = {};

export default Select;
