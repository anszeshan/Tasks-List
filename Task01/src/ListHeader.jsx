import React from 'react';

const ListHeader = () => {
  return (
    <div className="list-header">
      <h2>Items List</h2>
      <div className="header-actions">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="filter-button">Filter</button>
      </div>
    </div>
  );
};

export default ListHeader;