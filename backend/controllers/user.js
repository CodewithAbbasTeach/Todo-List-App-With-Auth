
const User = require("../models/user"); // Import the User model to interact with the database
const bcrypt = require("bcryptjs"); // Import bcrypt for password hashing

module.exports.register = async (req, res) => {
    try {
        const { email, username, password } = req.body; // Destructure email, username, and password from request body

        const user = new User({ email, username, password }); // Create a new user instance with the provided data
        
        // Save the user to trigger Mongoose validation
        await user.validate(); // This explicitly triggers validation to ensure data integrity
        
        // Hash the password after validation passes
        user.password = bcrypt.hashSync(password, 10); // Hashing the password for secure storage

        // Save the user to the database
        await user.save().then(() => 
            res.status(201).json({ user }) // Respond with the created user and 201 status
        );
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ message: error.message }); // Respond with a 400 status and error message
    }
};

module.exports.signin = async (req, res) => {
    try {
        // Find user by email in the database
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: "Please Sign Up First" }); // If user doesn't exist, respond with an error
            return; // Exit the function if user is not found
        }
        
        // Compare the provided password with the stored hashed password
        const IspasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!IspasswordCorrect) {
            console.log(error.message); // Log the error if the password is incorrect
            res.status(400).json({ message: "Password is not correct" }); // Respond with an error message
            return; // Exit the function if password is incorrect
        }

        const { password, ...others } = user._doc; // Exclude the password from the response data
        res.status(200).json({ others }); // Respond with the user data without the password
    } catch (error) {
        res.status(400).json({ message: "User not found: " + error.message }); // Respond with an error if something goes wrong
    }
};