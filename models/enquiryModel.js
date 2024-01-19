const mongoose=require('mongoose')

// schema
const enquirySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    projectInterested:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    }
})

const enquiries=new mongoose.model('enquiries',enquirySchema)

module.exports=enquiries