// const mongoose=require("mongoose");

// const conn=async(req, res)=>{
//     try{
//         await mongoose.connect(
//             "mongodb+srv://codewithabbas2024:Aliraza11@cluster1.0mt2u.mongodb.net/codewithabbas2024?retryWrites=true&w=majority&appName=Cluster1"
//         )
//         .then(()=>{
//             console.log("connected");
//         });
//     }
//     catch (error){
//         res.status(400).json({
//            msg: "db not connect"
//         });
//     }
// }
// conn()