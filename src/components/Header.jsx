import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
];

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light',
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark',
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);

    return (
        <div>
            <div>Change</div>
        </div>
    );
};

export default Header;
