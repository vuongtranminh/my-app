import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import images from '~/assets/images/svgs';

const Autocomplete = ({ data }) => {
    const [inputSearch, setInputSearch] = useState('');
    const [filterSearch, setFilterSearch] = useState([]);

    const handleFilter = (event) => {
        setInputSearch(event.target.value);

        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(inputSearch.toLowerCase());
        });

        setFilterSearch(newFilter);
    };

    useEffect(() => {
        if (inputSearch === '') {
            setFilterSearch([]);
        }
    }, [inputSearch]);

    function handleClickAutoComplete(value) {
        setInputSearch(value.title);
        setFilterSearch([]);
    }

    function clearText() {
        setInputSearch('');
        setFilterSearch([]);
    }

    return (
        <div className="lt-autocomplete">
            <div className="lt-autocomplete__wrapper">
                <div className="lt-autocomplete__input">
                    <input type="text" placeholder="Pesquisar..." value={inputSearch} onChange={handleFilter} />
                    {inputSearch && (
                        <span className="lt-autocomplete__input__clear" onClick={clearText}>
                            <img src={images.x} />
                        </span>
                    )}
                </div>
                <div className="lt-autocomplete__line-loading"></div>
            </div>
            {inputSearch &&
                (filterSearch.length !== 0 ? (
                    <div className="lt-autocomplete__results">
                        {filterSearch.slice(0, 15).map((value) => (
                            <div
                                key={value.id}
                                className="lt-autocomplete__results__item"
                                onClick={() => handleClickAutoComplete(value)}
                            >
                                <span>
                                    <img src={images.search} />
                                </span>
                                <p>{value.title}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="lt-autocomplete__results lt-autocomplete__results--no-data">
                        <p>Không có data</p>
                    </div>
                ))}
        </div>
    );
};

Autocomplete.propTypes = {};

export default Autocomplete;
