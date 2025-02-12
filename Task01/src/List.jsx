import React, { useState, useEffect, useCallback } from 'react';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (pageNum) => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Replace this with your actual API call
      const response = await fetch(`https://api.example.com/data?page=${pageNum}`);
      const newData = await response.json();
      
      setData(prevData => [...prevData, ...newData]);
      setHasMore(newData.length > 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    
    fetchData(page);
        return () => {
      controller.abort();
    };
  }, [page, fetchData]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="list-container">
      <ListHeader />
      <div className="list-content">
        {data.map((item, index) => (
          <div key={index} className="list-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <ListFooter loading={loading} hasMore={hasMore} onLoadMore={loadMore} />
    </div>
  );
};

export default List;