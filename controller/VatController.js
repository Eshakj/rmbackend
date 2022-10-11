const express = require("express")
const Vat = require("../models/Vat")

const getAllVat= async(req,res)=>{
    try {
        //select all from customers
        const vat = await Vat.query()
        return res.status(200).json(products)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
 

}

const addVat= async(req,res)=>{    
    try {
        const { vat_code, vat_percent} = req.body
        const product={
            vat_code: Math.floor(Math.random()* 100000),
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





    // const updateProduct= async(req,res)=>{    
    //    try {
    //    const {id}= req.params
    //     const customerUpdated = await Customer.query()
    //     .findById(id)
    //     .patch(req.body);
    //     return res.status(200).json('Customer updated successfully')

    //    } catch (error) {
    //     console.error(error.message)
    //     return res.status(500).json(error.message)
    //    }
    
           
    
    //   }
     
    
    // const deleteProduct = async (req,res)=>{
    //     const {id} = req.params
    //     const numDeleted = await Customer.query().deleteById(id);
    //     return res.status(200).json('Customer deleted successfully')

    // }
    





module.exports= { getAllVat, addVat,updateProduct,deleteProduct}



