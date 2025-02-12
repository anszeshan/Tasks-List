const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173", // Replace with your frontend URL
      credentials: true, // Allow cookies & auth headers
    })
  );


  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Allow frontend origin
    res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allowed methods
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers
    next();
  });
  
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
