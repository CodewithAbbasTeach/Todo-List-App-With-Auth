const mongoose = require("mongoose"); // Import Mongoose to work with MongoDB

// Define the schema for the user
const userSchema = new mongoose.Schema({
    email: { // User's email address
        type: String, // Type must be a string
        required: true, // Email is required
        unique: true, // Email must be unique across all users
        lowercase: true, // Convert email to lowercase
        trim: true, // Remove whitespace from both ends
        validate: { // Custom validation for email format
            validator: function(v) {
                // Regex to validate email format
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!` // Error message for invalid email
        }
    },
    username: { // User's username
        type: String, // Type must be a string
        required: true, // Username is required
        unique: true, // Username must be unique
        minlength: 3, // Minimum length is 3 characters
        maxlength: 30 // Maximum length is 30 characters
    },
    password: { // User's password
        type: String, // Type must be a string
        required: true, // Password is required
        minlength: 6, // Minimum length is 6 characters
        validate: { // Custom validation for password strength
            validator: function(v) {
                // Regex to ensure password has at least one uppercase letter and one number
                return /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(v);
            },
            message: props => 'Password must be at least 6 characters long and contain at least one uppercase letter and one number.' // Error message for weak password
        }
    },
    list: [ // Array to hold references to List(s) associated with the user
        {
            type: mongoose.Types.ObjectId, // Each entry is an ObjectId
            ref: "List" // Reference to the List model
        }
    ]
});

// Export the User model based on the userSchema
module.exports = mongoose.model("User", userSchema);
