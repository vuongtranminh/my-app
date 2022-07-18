import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className={`layout`}>
            <div>AppLayout</div>
            <Outlet />
        </div>
    );
};

export default AppLayout;
