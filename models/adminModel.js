const mongoose=require('mongoose')

// schema
const adminsSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const admins=new mongoose.model('admins',adminsSchema)

module.exports=admins