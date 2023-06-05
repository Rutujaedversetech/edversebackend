const mongoose=require("mongoose")

const main=async()=>{
    try {
        return mongoose.connect("mongodb+srv://edverse:edverse@cluster0.8mtlboa.mongodb.net/")
    .then(()=>console.log('connected to database'))
    .catch((e)=>console.log(e))
    ///conn.disconnect()

    } catch (error) {
        console.log(error);
    }
    
   // console.log("conneted")
   // conn.disconnect()
}


module.exports=main