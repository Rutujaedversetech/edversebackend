const mongoose=require("mongoose")

const userapplicationSchema=new mongoose.Schema({
    
    //image: String
   // data: Buffer
   image:{type:String,required:true},

  



     
    })
     const useapplication=mongoose.model("application",userapplicationSchema)
     module.exports=useapplication