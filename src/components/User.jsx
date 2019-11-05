import React from 'react';
import pic from '../assets/images/displaypic.jpg';

const User = () => {
    return (
        <div className="user">
            <div className="user__image">
                <img src={pic} alt="profile"/>
            </div>
            <div className="user__fullname">
                <p className="user__fullname--bold">Jaohne Samue</p>
            </div>
            <div className="user__designation">
                <p>Front Desk Officer</p>
            </div>
            <div className="user__department">
                <p>Finance</p>
            </div>
      </div>
    );
}

export default User;
