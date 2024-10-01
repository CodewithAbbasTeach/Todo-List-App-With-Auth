const User = require("../models/user"); // Import the User model to interact with user data
const List = require("../models/list"); // Import the List model to interact with task lists



// CREATE
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

// update
module.exports.updateTask = async (req, res) => {
    try {
        let list;
        const { title, body, email } = req.body; // Destructure title, body, and email from request body
        const existingUser = await User.findOne({ email }); // Find the user by email
        
        if(!title || !body || !email) {
            res.status(400).json({message: "Fields not complete"})
        }
        if (!existingUser) {
            res.status(400).json({ message: "user not found" }); // If user doesn't exist, respond with an error
            return; // Exit the function if user is not found
        }
         if (existingUser) { // Check if the user exists
        try{
            list = await List.findByIdAndUpdate(req.params.id, {title, body});
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
        
         
        // Check if the new data is the same as the existing data
        const isTitleSame = title === list.title;
        const isBodySame = body === list.body;

       if (isTitleSame && isBodySame) {
            return res.status(400).json({ message: "No updates made" }); // If no changes, respond with an error
        }

        // Proceed to update the task if changes are detected
        list.title = title;
        list.body = body;

          await  list.save()
          .then(()=>res.status(200).json({message: "Task Update Successful"}));

    }
    } catch (error) {
       
        res.status(400).json({ message: "Internal server error" , error}); // Respond with a 500 status for any unexpected errors
    }
};
module.exports.deleteTask = async (req, res) => {
    try {
        const { email } = req.body; // Destructure title, body, and email from request body

        const existingUser = await User.findOneAndUpdate({ email }, {$pull:{list: req.params.id}}
        ); // Find the user by email
        if (existingUser) { // Check if the user exists
             
         const list=   await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message: "Task Delete Successful"}));

        }
    } catch (error) {
       
        res.status(500).json({ message: "Internal server error" }); // Respond with a 500 status for any unexpected errors
    }
};
// gettask
module.exports.getTask=async(req, res)=>{
    const list=await list.find({user: req.params.id}.sort({createdAt: -1}));
    if(list.length!==0){
        res.status(200).json({ list });
    }
    else{
            res.status(400).json({message : "no task"})
    }


};