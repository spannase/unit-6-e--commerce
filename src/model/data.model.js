
 const mongoose=require('mongoose');

 const dataSchema= new mongoose.Schema({
     image:{type:Array ,require:true },
     title:{type:String,require:true},
     description:{type:String,require:true},
     price:{type:Number , require:true},
     crossprice:{type:Number , require:true},
     color:{type:String ,require:true },
     rating:{type:Number , require:true},
     catagory:{type:String,require:true}

 },{
     versionKey:false,
     timestamps:true
 });

 
 const Data=mongoose.model("shreya",dataSchema);
 module.exports=Data;
