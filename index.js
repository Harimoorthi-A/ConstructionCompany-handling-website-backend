require('dotenv').config()

const express=require('express')
const cors=require('cors')

const router=require('./Routes/routes')

// db connection
require('./Connections/db')
const hvcApp=express()

hvcApp.use(cors())
hvcApp.use(express.json())
hvcApp.use(router)

const port=3000 || process.env.port
hvcApp.listen(port,()=>{
    console.log(`___hvc server started at port ${port}___`);
})