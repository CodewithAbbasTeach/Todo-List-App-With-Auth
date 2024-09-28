const express = require("express"); // Import Express framework for building the web server
const mongoose = require("mongoose"); // Import Mongoose for interacting with MongoDB

require("dotenv").config(); // Load environment variables from .env file

// Import the route handlers for authentication and task lists
const auth = require("./routes/auth");
const list = require("./routes/list");

const app = express(); // Create an instance of Express

const PORT = process.env.PORT || 3000; // Set the port from environment variables or default to 3000

app.use(express.json()); // Middleware to parse JSON request bodies

// Connect to MongoDB using the connection string from environment variables
mongoose
.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected"); // Log a success message if connection is successful
}).catch((err) => {
    console.log(err); // Log any connection errors
});

// Define routes for the application
app.use("/api/v1/", auth); // Use auth routes for version 1 of the API
app.use("/api/v2/", list); // Use list routes for version 2 of the API

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.....`); // Log the port number the server is running on
});
