const Diocese = require("../models/Diocese")

const getAllDiocese = async(req,res)=>{
    try {
        const allDiocese = await Diocese.query()
        return res.status(200).json(allDiocese)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

const addDiocese = async (req,res)=>{
    try {
        const {diocese_code,diocese_name, distributor_code, county, sub_county} = req.body
        const diocese = {
            id: Math.floor(Math.random()*10000),
            diocese_code,
             distributor_code,
             diocese_name,
              county, 
              sub_county
        }
        const Dioceses = await Diocese.query().insert(diocese)
        return res.status(200).json("diocese successfully added")
    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

const updateDiocese = async (req,res)=>{
    try {
        const {id}= req.params
        const updatedDiocese = await Diocese.query().findById(id).patch(req.body)
        console.log(req.body)
        return res.status(200).json("Diocese updated successfully")
    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

const deleteDiocese = async (req,res)=>{
    try {
        const {id}= req.params
        const deleteDiocese = await Diocese.query().deleteById(id)
        return res.status(200).json("Diocese deleted successfully")
    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}
module.exports = {getAllDiocese,addDiocese,updateDiocese, deleteDiocese}