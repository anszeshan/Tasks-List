import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/users",
  withCredentials: true,
});

export const registerUser = (userData) => 
  
  { 
    API.post("/register", userData);
    console.log("User Data......", userData);


  }
export const loginUser = (userData) => API.post("/login", userData);
