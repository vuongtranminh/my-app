import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    const { items, itemText, value, onClickOption, noBorder, label } = props;
    const [isShowOption, setIsShowOption] = useState(false);

    const handleShowOption = () => {
        setIsShowOption(!isShowOption);
    };

    const handleClickOption = (value) => {
        setIsShowOption(false);
        onClickOption(value);
    };

    const isValueChoose = (item) => {
        if (item === value) {
            return true;
        }
    };

    return (
        <div className="select-box">
            <div className={`options-container ${isShowOption && 'active'} ${label && 'options-container--label'}`}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`option ${isValueChoose(item) && 'active'}`}
                        onClick={() => handleClickOption(item)}
                    >
                        {item.icon && <img src={item.icon} />}
                        <label>{itemText ? item[itemText] : item}</label>
                    </div>
                ))}
            </div>

            <div className="selected">
                {label && (
                    <label className="selected__label" onClick={handleShowOption}>
                        {label}
                    </label>
                )}
                <div
                    className={`selected__value ${noBorder && 'selected__value--no-border'}`}
                    onClick={handleShowOption}
                >
                    <span>
                        {value.icon && (
                            <span className="lt-select__selected__icon">
                                <img src={value.icon} />
                            </span>
                        )}
                        {itemText ? value[itemText] : value}
                    </span>
                    <span className="lt-select__selected arraw">
                        <i class={`bx bxs-${isShowOption ? 'up' : 'down'}-arrow`}></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

Select.propTypes = {};

export default Select;
