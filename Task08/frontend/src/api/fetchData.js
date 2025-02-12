import axios from "axios";

// Simulated API for fetching paginated data
export const fetchData = async (page) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
  return response.data;
};
