import React from 'react';
import Navbar from '../components/navbar/Navbar';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default Layout;