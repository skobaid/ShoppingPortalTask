const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ShoppingTask").then(()=>{
    console.log("Connection is Done.......!");
}).catch((error)=>{
    console.log("Error in DataBase Connection", error);
})