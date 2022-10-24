import React from 'react';
import LayoutHeader from './LayoutHeader';
import { Outlet } from 'react-router-dom';

function Layout2() {
    return (
        <div>
            <LayoutHeader/>
            <Outlet/>
        </div>
    );
}

export default Layout2;