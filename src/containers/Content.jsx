import React from 'react';
import Dashboard from '../components/Dashboard';
import DocumentsView from '../components/DocumentsView'

const Content = () => {
    return (
        <div className="content">
            <div className="content__wrapper">
                <Dashboard />
                <DocumentsView />
            </div>
        </div>
    );
}

export default Content;
