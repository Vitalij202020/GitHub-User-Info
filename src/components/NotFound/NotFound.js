import React from 'react';
import './NotFound.css';
import User from '../../assets/user.png';

const NotFound = () => {
  return (
    <div className="user-not-found">
      <img src={User} alt="search-label" />
      <p>User not found</p>
    </div>
  );
};

export default NotFound;
