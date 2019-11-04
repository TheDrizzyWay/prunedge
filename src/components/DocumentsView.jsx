import React from 'react';

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
                        <tr class="table-header">
                            <th>File name</th>
                            <th>Class <div class="filler-2"></div></th>
                            <th>Due Date <div class="filler-2"></div></th>
                            <th>Owner</th>
                        </tr>

                        <tr class="table-row">
                            <td class="file-name-data">Application for Leave</td>
                            <td>Proposal</td>
                            <td>12-Jan-2018</td>
                            <td class="review-column">
                                <div>
                                    <img src="" alt=""/>
                                </div>
                                <p className="owner-name">Olumide Mich...</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>

                        <tr class="table-row">
                            <td class="file-name-data">Application for Leave</td>
                            <td>Application</td>
                            <td>12-Jan-2018</td>
                            <td class="review-column">
                                <div>
                                    <img src="" alt=""/>
                                </div>
                                <p className="owner-name">Segun Oni</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>

                        <tr class="table-row">
                            <td class="file-name-data">Application for Leave</td>
                            <td>Proposal</td>
                            <td>12-Jan-2018</td>
                            <td class="review-column">
                                <div>
                                    <img src="" alt=""/>
                                </div>
                                <p className="owner-name">Tola White</p>
                                <p className="review">Review</p>
                            </td>
                        </tr>

                        <tr class="table-row">
                            <td class="file-name-data">Application for Leave</td>
                            <td>Application</td>
                            <td>12-Jan-2018</td>
                            <td class="review-column">
                                <div>
                                    <img src="" alt=""/>
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
                <div className="documents__summary--pie"></div>
            </div>
        </div>
    );
}

export default DocumentsView;
