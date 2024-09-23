const router=require("express").Router();

const User =require("../models/user");


router.post("/register", async(req,res)=>{
    try{
       const {email, username , password} =req.body
    }
    catch(error){

    }
})

module.exports=router