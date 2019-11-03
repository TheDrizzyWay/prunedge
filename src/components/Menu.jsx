import React from 'react';

const Menu = () => {
    return (
        <div className="menu">
            <div className="item">
                <a className="active" href="/">
                    <i className="fas fa-home"></i> Dashboard
                </a>
            </div>
            <div className="item">
                <a href="/">
                    <i className="fas fa-bookmark"></i> Documents
                </a>
            </div>
            <div className="item">
                <a href="/">
                    <i className="fas fa-bell"></i> Activity
                </a> 
                <div className="badge">
                    <p>12</p>
                </div>
            </div>
            <div className="item">
                <a href="/">
                    <i class="fas fa-archive"></i> Archive
                </a>
            </div>
            <div className="item">
                <a href="/">
                    <i class="fas fa-cog"></i> Settings
                </a>
            </div>
            <div className="filler"></div>
            <div className="item item__logout">
                <a className="logout" href="/">
                    <i className="fas fa-arrow-circle-left"></i> Log Out
                </a>
            </div>
        </div>
    );
}

export default Menu;
