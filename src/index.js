// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB  from './db/db.js'

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`sever is runing at port: ${process.env.PORT}`)

  })
})
.catch((error)=>{
  console.log("CONECTION IS FAILED",error);
  
})




















/*

import express from "express"
const app = express()

(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

      app.on("error",(error) =>{
        console.log("Error",error);
        throw error
        
      })

      app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
        
      })

    } catch(error){
        console.log("Error",error)
        throw error
    }
})()

*/

