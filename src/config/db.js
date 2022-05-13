
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://shre:shre@cluster0.lwoil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    
 }

 
 module.exports=connectdb;
 