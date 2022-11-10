const Distributorinvoicemaster = require("../models/Distributorinvoicemaster")

const getAllDistInvMasters = async(req,res)=>{
    try {
        const distributors = await Distributorinvoicemaster.query()
        return res.status(200).json(distributors)
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const addDistInvMaster = async (req,res)=>{
    try {
        const {distributor_code, diocese_code, invoice_number,date, ship_to, terms, ship_date, ship_total}= req.body
        const add = {
            id : Math.floor(Math.random()*10000),
            distributor_code,
            diocese_code,
            invoice_number,
            date,
            ship_to, 
            terms,
            ship_date,
            ship_total
        }
        const added = await Distributorinvoicemaster.query().insert(add)
        return res.status(200).json("added succesfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const updateDistInvMaster = async(req,res)=>{
    try {
        const {id} = req.params
        const updated = await Distributorinvoicemaster.query().findById(id).patch(req.body)
        return res.status(200).json("updated successfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const deleteDistInvMaster = async(req,res)=>{
    try {
        const {id} = req.params
        const deleted = await Distributorinvoicemaster.query().deleteById(id)
        return res.status(200).json("deleted successfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}
module.exports = {getAllDistInvMasters, updateDistInvMaster, addDistInvMaster, deleteDistInvMaster}