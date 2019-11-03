import React from 'react';
import User from '../components/User';
import Menu from '../components/Menu';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <User />
            <Menu />
        </div>
    );
}

export default Sidebar;
