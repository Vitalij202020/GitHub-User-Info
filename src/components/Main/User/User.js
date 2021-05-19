import React from 'react';
import './User.css';
import Followers from '../../../assets/followers.png';
import Following from '../../../assets/following.png';

const User = ({ user }) => {
  if (!user.name) user.name = 'Unnamed';

  return (
    <div className="user">
      <img className="avatar" src={user.avatar_url} alt="foto" />
      <h1>{user.name}</h1>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        {user.login}
      </a>
      <div className="follow">
        <div className="followers">
          <img src={Followers} alt="followers" />
          <p>{user.followers} followers</p>
        </div>
        <div className="following">
          <img src={Following} alt="following" />
          <p>{user.following} following</p>
        </div>
      </div>
    </div>
  );
};

export default User;
