import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <p>Dashboard</p>
            <div className="dashboard__info">
                <div className="dashboard__info--statistics">
                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-purple">
                            <i class="far fa-file-alt"></i>icon
                        </div>
                        <div className="stat-text">
                            <p>Lorem ipsum dolor sit amet</p>
                            <h4>adipiscing elit</h4>
                        </div>
                    </div>

                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-blue">
                            <i class="far fa-file-alt"></i>icon
                        </div>
                        <div className="stat-text">
                            <p>Lorem ipsum dolor sit amet</p>
                            <h4>adipiscing elit</h4>
                        </div>
                    </div>

                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-turquoise">
                            <i class="far fa-file-alt"></i>icon
                        </div>
                        <div className="stat-text">
                            <p>Lorem ipsum dolor sit amet</p>
                            <h4>adipiscing elit</h4>
                        </div>
                    </div>

                    <div className="dashboard__info--stat">
                        <div className="stat-icon stat-icon-green">
                            <i class="far fa-file-alt"></i>icon
                        </div>
                        <div className="stat-text">
                            <p>Lorem ipsum dolor sit amet</p>
                            <h4>adipiscing elit</h4>
                        </div>
                    </div>
                </div>
                <button class="new-document">
                    <i className="fas fa-bell"></i> New Document
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
