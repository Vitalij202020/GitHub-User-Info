import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/logo.svg';

const NavBar = ({ takeUserName }) => {
  const [userName, setUserName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    takeUserName(userName);
    setUserName('');
  };

  return (
    <div className="nav">
      <div className="container nav--container">
        <div className="nav--logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav--search">
          <form onSubmit={onSubmit}>
            <input type="text" name="search" placeholder="Enter GitHub username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
