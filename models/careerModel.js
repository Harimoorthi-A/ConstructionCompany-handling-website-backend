const mongoose=require('mongoose')

// schema
const careersSchema=new mongoose.Schema({
    jobName:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const careers=new mongoose.model('careers',careersSchema)

module.exports=careers