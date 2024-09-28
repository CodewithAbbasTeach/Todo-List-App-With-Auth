const router = require("express").Router(); // Import Express Router to handle routing

// Import the register and signin functions from the user controller
const { register, signin } = require("../controllers/user");

// Define a POST route for user registration
router.post("/register", register); // When a POST request is made to /register, call the register function

// Define a POST route for user sign-in
router.post("/signin", signin); // When a POST request is made to /signin, call the signin function

// Export the router so it can be used in other parts of the application
module.exports = router;
