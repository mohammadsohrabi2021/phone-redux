import React from 'react';
import HeaderLayout from './HeaderLayout';
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <div>
            <HeaderLayout/>
            <Outlet/>
        </div>
    );
}

export default Layout;