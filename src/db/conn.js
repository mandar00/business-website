const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/bussinessdb",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(" mongose connection sucessful")
}).catch((error)=>{
    console.error(error)
})