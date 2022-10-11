require("dotenv").config()
//import packages
const express = require('express')
const morgan = require("morgan")
const cors  = require("cors")
const customerRouter = require("./routes/customer.routes")
const productRouter = require("./routes/product.routes")
const vatRouter = require("./routes/vat.routes")

const PORT = process.env.PORT || 5600

//create app
const app= express()

//import knexfile
require("./knexfile")


//define middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('dev'))
app.use("/", customerRouter)
app.use("/", productRouter)
app.use("/", vatRouter)

//define routes
app.get('/',(req, res)=>{
   return res.status(200).json({greetings:'Hello Esha'})
})


//start server
app.listen(PORT, ()=>console.log(`server is up and running on port ${PORT}`))