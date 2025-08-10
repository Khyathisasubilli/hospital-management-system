const express = require("express")
const app=express()
app.use(express.json())
const path=require("path")
const cors = require('cors');
app.use(cors());
const router=require('./router/user.js')
const router1=require('./router/appoint.js')
const router2=require('./router/dash.js')
const router3=require('./router/payment.js')
const connection=require('./mongodb.js')
connection()
app.use('/user',router)
app.use('/appointment',router1)
app.use('/dashbo',router2)
app.use('/payment',router3)
app.listen(3000,()=>{
console.log("port connected")}
)