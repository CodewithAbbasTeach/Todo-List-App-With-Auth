const router = require("express").Router(); // Import Express Router to handle routing

// Import the addTask function from the list controller
const { addTask } = require("../controllers/list");

// Define a POST route for adding a task
router.post("/addTask", addTask); // When a POST request is made to /addTask, call the addTask function

// Export the router so it can be used in other parts of the application
module.exports = router;
