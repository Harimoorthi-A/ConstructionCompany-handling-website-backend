const mongoose=require('mongoose')

// schema
const projectsSchema=new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    style:{
        type:String,
        required:true
    },
        projectImage:{
        type:String,
        required:true
    }
})

const projects=new mongoose.model('projects',projectsSchema)

module.exports=projects