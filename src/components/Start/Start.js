import React from 'react';
import './Start.css';
import Label from '../../assets/search.png';

const Start = () => {
  return (
    <div className="start">
      <img src={Label} alt="search-label" />
      <p>Start with searching</p>
      <p>a GitHub user</p>
    </div>
  );
};

export default Start;
