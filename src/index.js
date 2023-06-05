
//require("dotenv").config();
///const PORT=process.env.PORT
//console.log(PORT)
const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()

const main=require("./config/db")
//console.log(connect)
app.use(express.json())
app.use(cors())

//console.log(POR)



const userRoute=require("./features/user/user.router")

const hrRoute=require("./features/hrdetail/hr.router")

const jobpostRoute=require("./features/posts/post.router")

const jobapplicationRoute=require("./features/userjob/userjob.router")


app.use("/users",userRoute)
app.use("/hr",hrRoute)
app.use("/job",jobpostRoute)
app.use("/application",jobapplicationRoute)



app.listen(8080,async()=>{
    try{
       await main()
   
    }catch(e){
   console.log(e.message)
    }
   
       console.log(`port running on http://localhost:8080`)
   })

   // mongoimport --drop --db masaizon --collection users --file ./users.json --jsonArray
   // {
  
  
  //"name": "naio",
  
  //"email": "sdominique0@usda.gov",
 // "password": "male",

 // "age": 37
//   }{

  //"quantity":5,
  //"user":"634b8b2b0a11c9f0e75d6fba",
  //"product":"634b92bafbebc4dec1d9ef92"
  //}