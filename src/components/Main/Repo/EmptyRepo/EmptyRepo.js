import React from 'react';
import './EmptyRepo.css';
import Cross from '../../../../assets/rep.png';

const EmptyRepo = () => {
  return (
    <div className="empty-box">
      <img src={Cross} alt="search-label" />
      <p>Repository list is empty</p>
    </div>
  );
};

export default EmptyRepo;
