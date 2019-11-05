import React from 'react';
import Dashboard from '../components/Dashboard';
import DocumentsView from '../components/DocumentsView';
import RecentView from '../components/RecentView';

const Content = () => {
    return (
        <div className="content">
            <div className="content__wrapper">
                <Dashboard />
                <DocumentsView />
                <RecentView />
            </div>
        </div>
    );
}

export default Content;
