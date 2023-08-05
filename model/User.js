const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    phoneNumber:{
        type:Number,
        minLength:10,
        maxLength:10
    },
    email:{
        type:String
    },
    aadharNo:{
        type:String
    },
    photoUrl:{
        type:String
    },
    role:{
        type:String,
        enum: ['serviceProvider' , 'customer'],
        default: 'customer'
    },
    NGOName:{
        type:String
    },
    NgoAddress:{
        type:String
    }

})

module.exports = mongoose.model("User", userSchema);