import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <p>Dashboard</p>
            <div className="filler-1"></div>
            <div className="dashboard__info">
                <div className="dashboard__info--statistics">
                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-purple">
                            <i className="fas fa-sitemap"></i>
                        </div>
                        <div className="stat-text">
                            <p>Departments</p>
                            <h4>5 members</h4>
                        </div>
                    </div>

                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-blue">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="stat-text">
                            <p>Members</p>
                            <h4>24 members</h4>
                        </div>
                    </div>

                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-turquoise">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-text">
                            <p>Units</p>
                            <h4>3 Units</h4>
                        </div>
                    </div>

                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-green">
                            <i className="fas fa-archive"></i>
                        </div>
                        <div className="stat-text">
                            <p>Documents</p>
                            <h4>12,097 files</h4>
                        </div>
                    </div>
                </div>
                <button className="new-document-btn">
                    <i className="fas fa-plus"></i> <p>New Document</p>
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
