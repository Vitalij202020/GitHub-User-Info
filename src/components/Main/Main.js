import React from 'react';
import Repo from './Repo/Repo';
import User from './User/User';
import './Main.css';

const Main = ({ user, repo }) => {
  return (
    <div className="container main--container">
      <User user={user} />
      <Repo repo={repo} />
    </div>
  );
};

export default Main;
