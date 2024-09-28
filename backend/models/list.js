const mongoose = require("mongoose"); // Import Mongoose to work with MongoDB

// Define the schema for the list
const listSchema = new mongoose.Schema({
    title: { // Title of the task
        type: String, // Type must be a string
        required: true, // Title is required
    },
    body: { // Body or description of the task
        type: String, // Type must be a string
        required: true, // Body is required
    },
    user: [ // Array to hold references to User(s)
        {
            type: mongoose.Types.ObjectId, // Each entry is an ObjectId
            ref: "User" // Reference to the User model
        },
    ],
}, 
{ timestamps: true } // Automatically create 'createdAt' and 'updatedAt' fields
);

// Export the List model based on the listSchema
module.exports = mongoose.model("List", listSchema);
