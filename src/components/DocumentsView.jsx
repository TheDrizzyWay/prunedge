import React from 'react';
import pic from '../assets/images/displaypic.jpg';

const DocumentsView = () => {
    return (
        <div className="documents">
            <div className="documents__pending">
                <div className="documents__pending--header">
                    <h2>Pending Documents</h2>
                    <p>View All</p>
                </div>
                <div className="documents__pending--table">
                    <table>
                        <tr className="table-header">
                            <th>File name</th>
                            <th>Class <div className="filler-2"></div></th>
                            <th>Due Date <div className="filler-2"></div></th>
                            <th>Owner</th>
                        </tr>

                        <tr className="table-row">
                            <td className="file-name-data">Application for Leave</td>
                            <td>Proposal</td>
                            <td>12-Jan-2018</td>
                            <td className="review-column">
                                <div>
                                    <img src={pic} alt="owner pic"/>
                                </div>
                                <p className="owner-name">Olumide Mich...</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <td className="file-name-data">Application for Leave</td>
                            <td>Application</td>
                            <td>12-Jan-2018</td>
                            <td className="review-column">
                                <div>
                                <img src={pic} alt="owner pic"/>
                                </div>
                                <p className="owner-name">Segun Oni</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <td className="file-name-data">Application for Leave</td>
                            <td>Proposal</td>
                            <td>12-Jan-2018</td>
                            <td className="review-column">
                                <div>
                                    <img src={pic} alt="owner pic"/>
                                </div>
                                <p className="owner-name">Tola White</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>

                        <tr className="table-row">
                            <td className="file-name-data">Application for Leave</td>
                            <td>Proposal</td>
                            <td>12-Jan-2018</td>
                            <td className="review-column">
                                <div>
                                    <img src={pic} alt="owner pic"/>
                                </div>
                                <p className="owner-name">Enobong Mich</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="documents__summary">
                <div className="documents__summary--header">
                    <h2>Documents Summary</h2>
                </div>
                <div className="documents__summary--pie">
                    <div className="inner-pie">
                        <div className="amount-pending">
                            <h1>12</h1>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>
                <div className="documents__summary--stats">
                    <div className="status">
                        <div className="status-approved"></div>
                        <p>Approved</p>
                        <span>32</span>
                    </div>

                    <div className="status">
                        <div className="status-rejected"></div>
                        <p>Rejected</p>
                        <span>15</span>
                    </div>
                    
                    <div className="status status-wrap">
                        <div className="status-pending"></div>
                        <p>Pending</p>
                        <span>12</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocumentsView;
