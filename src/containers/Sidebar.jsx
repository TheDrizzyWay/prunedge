import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Menu from '../components/Menu';
import { getUser } from '../actions';

export const Sidebar = (props) => {
    const { getUser, user } = props;

    useEffect(() => {
        getUser();
    }, [getUser]);
        
    return (
        <div className="sidebar">
            <User user={user} />
            <Menu />
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user
});

const mapDispatchToProps = {
    getUser
};

Sidebar.defaultProps = {
    user: {
        id: 1,
        department: 'Finance',
        designation: 'Front Desk Officer',
        name: 'Jaohne Samue'
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
