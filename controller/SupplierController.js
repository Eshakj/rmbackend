const express = require("express")
const Supplier = require("../models/Supplier")

const getAllSuppliers= async(req,res)=>{
    try {
        //select all from customers
        const suppliers = await Supplier.query()
        return res.status(200).json(suppliers)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
 

}

const addSupplier= async(req,res)=>{    
    try {
        const {supplier_code, supplier_name, supplier_pin,supplier_address} = req.body
        const supplier={
            id: Math.floor(Math.random()* 100000),
            supplier_code,
             supplier_name,
              supplier_pin,
              supplier_address    
        }

        const suppliers = await Supplier.query().insert(supplier)
        return res.status(200).json('Supplier saved successfully')

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }

}





    const updateSupplier= async(req,res)=>{   
        
        console.log("OYAAA")
       try {
       const {id}= req.params
        const supplerUpdated = await Supplier.query()
        .findById(id)
        .patch(req.body);
        return res.status(200).json('Supplier updated successfully')

       } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
       }
    
           
    
      }
     
    
    const deleteSupplier = async (req,res)=>{
        try {
            const {id} = req.params
        const numDeleted = await Supplier.query().deleteById(id);
        console.log(numDeleted)
        return res.status(200).json('Customer deleted successfully')
        } catch (error) {
            console.error(error.message)
        }
        

    }
    





module.exports= { getAllSuppliers,addSupplier, updateSupplier, deleteSupplier}



