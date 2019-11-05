import React from 'react';

const RecentView = () => {
    return (
        <div className="recent">
            <div className="card">
                <div className="header">
                    <h1>Recent Documents</h1>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i class="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Alpha deta Business Proposal</h2>
                        <p>Today, 14:30 pm</p>
                    </div>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i class="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>adipiscing elit</p>
                    </div>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i class="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>adipiscing elit</p>
                    </div>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i class="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentView;
