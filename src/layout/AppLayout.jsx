import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '~/components/Footer';
import Sidebar from '~/components/Sidebar';
import TopNav from '~/components/TopNav';

const AppLayout = () => {
    const themeMode = useSelector((state) => state.themeMode.themeMode);

    return (
        <div className={`layout ${themeMode}`}>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;
