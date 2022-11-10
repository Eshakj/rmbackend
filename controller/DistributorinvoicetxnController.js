const Distributorinvoicetxn = require("../models/Distributorinvoicetxn")


const getAllDistributorinvoicetxns = async(req,res)=>{
    try {
        const distributors = await Distributorinvoicetxn.query()
        return res.status(200).json(distributors)
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}
const addDistributorinvtxn = async(req,res)=>{
    try {
        const {invoice_number, invoice_sub_number,customer_id,product_code,rate,amount,vat,total,product_serial}= req.body
        const distributor = {
            id : Math.floor(Math.random()*10000),
            invoice_number,
             invoice_sub_number,
             customer_id,
             product_code,
             rate,
             amount,
             vat,
             total,
             product_serial
        }
        const addedDist = await Distributorinvoicetxn.query().insert(distributor)
        return res.status(200).json("added successfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const updateDistributorinvtxn = async(req,res)=>{
    try {
        const {id} = req.params
        const updated = await Distributorinvoicetxn.query().findById(id).patch(req.body)
        return res.status(200).json("updated successfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const deleteDistributorinvtxn = async(req,res)=>{
    try {
        const {id} = req.params
        const deleted = await Distributorinvoicetxn.query().deleteById(id)
        return res.status(200).json("deleted successfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}
module.exports = {getAllDistributorinvoicetxns, addDistributorinvtxn,updateDistributorinvtxn,deleteDistributorinvtxn}