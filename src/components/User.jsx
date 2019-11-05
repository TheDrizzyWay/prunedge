import React from 'react';
import pic from '../assets/images/displaypic.jpg';

const User = (props) => {
    const { user } = props;

    return (
        <div className="user">
            <div className="user__image">
                <img src={pic} alt="profile"/>
            </div>
            <div className="user__fullname">
                <p className="user__fullname--bold">{user.name}</p>
            </div>
            <div className="user__designation">
                <p>{user.designation}</p>
            </div>
            <div className="user__department">
                <p>{user.department}</p>
            </div>
      </div>
    );
}

export default User;
