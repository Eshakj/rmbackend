require("dotenv").config()
//import packages
const express = require('express')
const morgan = require("morgan")
const cors  = require("cors")
const customerRouter = require("./routes/customer.routes")
const dioceseRouter = require("./routes/diocese.routes")
const productRouter = require("./routes/product.routes")
const vatRouter = require("./routes/vat.routes")
const supplierRouter = require("./routes/supplier.routes")
const DistributorRouter = require("./routes/distributor.routes")
const DistributorPaymetAllocation = require("./routes/distributorpaymentallocation.routes")
const Distributorinvoicemaster = require("./routes/distributorinvmaster.routes")
const Distributorpaymentmaster = require("./routes/distributorpaymentmaster.routes")
const Distributorinvoicetxn = require("./routes/distributorinvoicetxn.routes")

const PORT = process.env.PORT || 5100

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
app.use("/", dioceseRouter)
app.use("/", productRouter)
app.use("/", vatRouter)
app.use("/", supplierRouter)
app.use("/", DistributorRouter)
app.use("/", Distributorinvoicemaster)
app.use("/", DistributorPaymetAllocation)
app.use("/", Distributorpaymentmaster)
app.use("/", Distributorinvoicetxn)


//define routes
app.get('/',(req, res)=>{
   return res.status(200).json({greetings:'Hello Esha'})
})


//start server
app.listen(PORT, ()=>console.log(`server is up and running on port ${PORT}`))