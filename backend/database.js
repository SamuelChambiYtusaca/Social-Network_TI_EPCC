const mongoose=require("mongoose")

URI=("mongodb://localhost/ensayo")

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true
})
    .then(db=>console.log("base de datos conectada"))
    .catch(error=>console.log(error))

module.exports=mongoose