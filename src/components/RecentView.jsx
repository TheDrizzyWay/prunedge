import React from 'react';
import pic from '../assets/images/displaypic.jpg';

const RecentView = () => {
    return (
        <div className="recent">
            <div className="card">
                <div className="header">
                    <h1>Recent Documents</h1>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i className="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Alpha deta Business Proposal</h2>
                        <p>Today, 14:30 pm</p>
                    </div>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i className="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Presentation Slides</h2>
                        <p>Today, 14:30 pm</p>
                    </div>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i className="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Property Invoice</h2>
                        <p>Today, 02:30 pm</p>
                    </div>
                </div>
                <div className="document">
                    <div className="doc-icon">
                        <i className="far fa-file-alt"></i>
                    </div>
                    <div className="doc-text">
                        <h2>Alex Interview Report</h2>
                        <p>Today, 14:30 pm</p>
                    </div>
                </div>
            </div>

            <div className="card2">
                <div className="header">
                    <h1>Recent Activities</h1>
                    <p>View All</p>
                </div>

                <div className="activity">
                    <div className="doc-header">
                        <div className="icon-container">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h4>Document Approval</h4>
                        <p>4 mins ago</p>
                    </div>
                    <div className="doc-content">
                        <div className="user">
                            <div className="user-icon">
                                <img src={pic} alt="user pic" />
                            </div>
                            <div className="user-comment">
                                <p>Segun Oni has approved, <span>Business proposal document.docx</span></p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>

                <div className="activity">
                    <div className="doc-header">
                        <div className="icon-container">
                            <i className="fas fa-exclamation-triangle danger"></i>
                        </div>
                        <h4>Document Rejection</h4>
                        <p>4 mins ago</p>
                    </div>
                    <div className="doc-content">
                        <div className="user">
                            <div className="user-icon">
                                <img src={pic} alt="user pic" />
                            </div>
                            <div className="user-comment">
                                <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card3">
                <div className="header">
                    <h1>Analysis</h1>
                    <label className="select-label" htmlFor="document-flow">
                        <select name="option">
                            <option value="department" defaultValue>Document flow by dept</option>
                            <option value="unit">Document flow by unit</option>
                        </select>
                    </label>
                </div>
                <div className="chart-container">
                    <table id="bar-graph">
                        <tbody>
                            <tr id="section-1">
                                <th scope="row">Acc</th>
                                <td className="before bar"></td>
                                <td className="after bar"></td>
                            </tr>
                            <tr id="section-2">
                                <th scope="row">HR</th>
                                <td className="before bar"></td>
                                <td className="after bar"></td>
                            </tr>
                            <tr id="section-3">
                                <th scope="row">Finance</th>
                                <td className="before bar"></td>
                                <td className="after bar"></td>
                            </tr>
                            <tr id="section-4">
                                <th scope="row">Media</th>
                                <td className="before bar"></td>
                                <td className="after bar"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="chart-legend">
                    <div className="chart-legend__approved">
                        <div></div>
                        <p>Approved</p>
                    </div>
                    <div className="chart-legend__pending">
                        <div></div>
                        <p>Pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentView;
