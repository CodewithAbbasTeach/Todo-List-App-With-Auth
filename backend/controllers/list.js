const User = require("../models/user"); // Import the User model to interact with user data
const List = require("../models/list"); // Import the List model to interact with task lists

module.exports.addTask = async (req, res) => {
    try {
        const { title, body, email } = req.body; // Destructure title, body, and email from request body
        const existingUser = await User.findOne({ email }); // Find the user by email

        if (existingUser) { // Check if the user exists
            const list = new List({ title, body, user: existingUser }); // Create a new list item with the title, body, and associated user
            await list.save().then(() => {
                res.status(200).json({ list }); // Save the list item to the database and respond with the created list
            });

            existingUser.list.push(list._id); // Push the new list item's ID to the user's list array (assuming it exists)
            await existingUser.save(); // Save the updated user with the new list item
        }
    } catch (error) {
        console.log(error); // Log any error that occurs during the process
        res.status(500).json({ message: "Internal server error" }); // Respond with a 500 status for any unexpected errors
    }
};
