const express = require("express")
const Distributorpaymentallocation = require("../models/Distributorpaymentallocation")

const getAllDistributorPaymentAllocations= async(req,res)=>{
    try {
        //select all from customers
        const distributors = await Distributorpaymentallocation.query()
        return res.status(200).json(distributors)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

const addDistributorpaymentAllocation= async(req,res)=>{    
    try {
        const {payment_id,invoice_sub_number,amount_allocated} = req.body
        const distributors={
            id: Math.floor(Math.random()*10000),
            payment_id,
            invoice_sub_number,
            amount_allocated   
        }

        //select all from customers
        const addedDistributors = await Distributorpaymentallocation.query().insert(distributors)
        return res.status(200).json('distributor saved successfully')

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

 const updateDistributorpaymentAllocation= async(req,res)=>{    
       try {
       const {id}= req.params
        const distributorUpdated = await Distributorpaymentallocation.query()
        .findById(id)
        .patch(req.body);
        return res.status(200).json('Distributor updated successfully')

       } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
       }
      }
     
const deleteDistributorpaymentAllocation = async (req,res)=>{
    try {
        const {id} = req.params
        const distDeleted = await Distributorpaymentallocation.query().deleteById(id);
        return res.status(200).json('Distributor deleted successfully')
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
        

    }
    
module.exports= { getAllDistributorPaymentAllocations, addDistributorpaymentAllocation,updateDistributorpaymentAllocation,deleteDistributorpaymentAllocation}


