const express = require("express")
const Distributor = require("../models/Distributor")



const getAllDistributors =async (req,res)=>{
    try {
        const distributors = await Distributor.query()
        return res.status(200).json(distributors)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

const addDistributor = async (req,res)=>{
    try {
        const {distributor_code,distributor_name,distributor_contact,distributor_phone, distributor_email, distributor_vat} = req.body
        const distributor = {
            id: Math.floor(Math.random()* 100000),
            distributor_code,
            distributor_name,
            distributor_contact,
            distributor_phone, 
            distributor_email,
            distributor_vat
        }
        const distributors = await Distributor.query().insert(distributor)
        res.status(200).json("Distributor added succesfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const updateDistributor = async(req,res)=>{
    try {
        const {id} = req.params
        const updatedDistributor = await Distributor.query().findById(id).patch(req.body)
        return res.status(200).json("distributor updated successfully")
      
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

const deleteDistributor = async (req,res) =>{
    try {
        const {id}= req.params
        const deleted = await Distributor.query().deleteById(id)
        res.status(200).json("deleted successfully")
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
}

module.exports = {addDistributor, getAllDistributors, updateDistributor,deleteDistributor}