const router=require("express").Router();
const User =require("../models/user");
const bcrypt= require("bcryptjs")


router.post("/register", async(req, res)=>{
    try{
       const {email, username , password} =req.body;
       const hashpassword=bcrypt.hashSync(password);
       const user=new User({email, username, password: hashpassword});
       await user.save().then(()=>
        res.status(200).json({user:user})
       );
    }
    catch(error){
          res.status(400).json({message:"User Already Exits"})
    }
});

router.post("/signin", async(req, res)=>{
    try{
         const user=await User.findOne({email: req.body.email });
         if(!user){
            res.status(400).json({message:"Please Sign Up First"})
         }
         const IspasswordCorrect=bcrypt.compareSync(
            req.body.password, 
            user.password
        );
         if(!IspasswordCorrect){
            console.log(error)
            res.status(400).json({message: "Please is not Correct Password"})
         }
        const { password, ...others }=user._doc;
        res.status(200).json({others})
    }
    catch(error){
          res.status(400).json({message: "user not found"})
    }
})
module.exports=router