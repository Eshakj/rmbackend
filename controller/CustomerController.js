const express = require("express")
const Customer = require("../models/Customer")

const getAllCustomers= async(req,res)=>{
    try {
        //select all from customers
        const customers = await Customer.query()
        return res.status(200).json(customers)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
 

}

const addCustomer= async(req,res)=>{    
    try {
        const {customer_name, diocese, church, phone_number} = req.body
        const customer={
            id: Math.floor(Math.random()* 100000),
            customer_name,
            church, 
            diocese,
            phone_number    
        }

        //select all from customers
        const customers = await Customer.query().insert(customer)
        return res.status(200).json('Customer saved successfully')

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }

}





    const updateCustomer= async(req,res)=>{    
       try {
       const {id}= req.params
        const customerUpdated = await Customer.query()
        .findById(id)
        .patch(req.body);
        return res.status(200).json('Customer updated successfully')

       } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
       }
    
           
    
      }
     
    
    const deleteCustomer = async (req,res)=>{
        const {id} = req.params
        const numDeleted = await Customer.query().deleteById(id);
        return res.status(200).json('Customer deleted successfully')

    }
    





module.exports= { getAllCustomers, addCustomer,updateCustomer,deleteCustomer}



