const mongoose = require("mongoose");
mongoose.connect(process.env.BASE_URl)
.then(()=>{
    console.log("___Mongodb Atlas connected___");
})
.catch(err=>{
    console.log("Mongodb not connected"+err);
});
