const mongoose=require("mongoose")

const hrSchema=new mongoose.Schema({
    email:{type:String, required:true,unique:true},
    role:{
        type:String,required:true,
        enum:["user","employee","hr"],
         default:"hr"
    }},{
        versionKey:false,
        timestamps:true
    })
     const Hrdata=mongoose.model("hr",hrSchema)
     module.exports=Hrdata