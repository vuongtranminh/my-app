import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    {
        display: 'Page',
        path: '/page',
    },
    {
        display: 'PageLayout',
        path: '/page-layout',
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);

    return <div>Header</div>;
};

export default Header;
