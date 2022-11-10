const express = require("express")
const Vat = require("../models/Vat")

const getAllVat= async(req,res)=>{
    try {
        //select all from customers
        const vats = await Vat.query()
        return res.status(200).json(vats)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
 

}

const addVat= async(req,res)=>{    
    try {
        const { vat_code, vat_percent} = req.body
        const vat={
            id : Math.floor(Math.random()* 100000),
            vat_code,
            vat_percent,      
        }

        //select all from customers
        const vats = await Vat.query().insert(vat)
        return res.status(200).json('vat saved successfully')

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }

}





    const updateVat= async(req,res)=>{    
       try {
       const {id}= req.params
        const customerUpdated = await Vat.query()
        .findById(id)
        .patch(req.body);
        return res.status(200).json('Vat updated successfully')

       } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
       }
    
           
    
      }
     
 const deleteVat = async (req,res)=>{
        try {
            const {id} = req.params
        const numDeleted = await Vat.query().deleteById(id);
        return res.status(200).json('Vat deleted successfully')
        } catch (error) {
            console.error(error.message)
        }
        

    }






module.exports= { getAllVat, addVat, updateVat, deleteVat}



