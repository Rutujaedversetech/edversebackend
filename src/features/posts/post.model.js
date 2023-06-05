const mongoose=require("mongoose")

const jobpostSchema=new mongoose.Schema({
    
    
        jobtitle:{
type:String,
required:true
        },
    // author:{
    //     type:mongoose.Schema.Types.ObjectId, 
    //     ref:"user",
    //     required:true
    // },
    //department:{type:String,required:true},
    department:{type:String,      
         enum:["management","design","developement"],
    required:true},

    jobtype:{type:String,      
        enum:["full-time","part-time"],
   required:true},

    salary:{type:String,required:true},
    experience:{type:String,required:true},
    location:{type:String,required:true},
        hiringmanager:{type:String,required:true},

    jobdescription:{type:String,required:true},

     skills:{type:Object,required:true},
     jobopen:{type:Boolean,required:true,default:true},


    // create:{type:Number,required:true},

    // image:{ type: String,
    //     data: Buffer},
    // category:{type:String,       
    //    enum:["newz","food","lifestyle","personal","photography","fashion","travel","general"],
    //    default:"general",

    // required:true}
     
    })
     const Jobpost=mongoose.model("jobpost",jobpostSchema)
     module.exports=Jobpost