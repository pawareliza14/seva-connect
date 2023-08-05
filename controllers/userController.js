
const User = require('../model/User');

const signUpAsCustomer = async(req,res) => {
    try{
        const {userName,address,city,state,phoneNumber,email,aadharNo,password} = req.body;
        const newUser = await User.create({userName,address,city,state,phoneNumber,email,aadharNo,password});
        return res.status(201).json({msg:'User created succesfully'});
    }catch(err){
        return res.status(500).json({msg:'Some error occured'});
    }
}

const login = async(req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({msg:`No user with email id ${email}`});
    }
    if(user.password === password){
        return res.status(200).json({msg:'User logged in successfully'});
    }else{
        return res.status(401).json({msg:'Incorrect email or password'});
    }
}