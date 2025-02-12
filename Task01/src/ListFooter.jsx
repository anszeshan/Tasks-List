import React from 'react';

const ListFooter = ({ loading, hasMore, onLoadMore }) => {
  return (
    <div className="list-footer">
      {loading && (
        <div className="loader">
          <div className="loader-spinner"></div>
          <span>Loading more items...</span>
        </div>
      )}
      {!loading && hasMore && (
        <button onClick={onLoadMore} className="load-more-button">
          Load More
        </button>
      )}
      {!hasMore && (
        <p className="no-more-data">No more items to load</p>
      )}
    </div>
  );
};

export default ListFooter;