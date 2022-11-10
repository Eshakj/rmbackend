const express = require("express")
const Distributorpaymentmaster = require("../models/Distributorpaymentmaster")

const getAllDistributorPaymentMasters= async(req,res)=>{
    try {
        //select all from customers
        const distributors = await Distributorpaymentmaster.query()
        return res.status(200).json(distributors)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

const addDistributorpaymentmasters= async(req,res)=>{    
    try {
        const {payment_date,payment_mode,payment_code,amount,invoice} = req.body
        const distributors={
            id: Math.floor(Math.random()*10000),
            payment_date,
            payment_mode,
            payment_code,
            amount,
            invoice   
        }

        //select all from customers
        const addedDistributors = await Distributorpaymentmaster.query().insert(distributors)
        return res.status(200).json('distributor saved successfully')

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
}

 const updateDistributorpaymentmaster= async(req,res)=>{    
       try {
       const {id}= req.params
        const distributorUpdated = await Distributorpaymentmaster.query()
        .findById(id)
        .patch(req.body);
        return res.status(200).json('Distributor updated successfully')

       } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
       }
      }
     
const deleteDistributorpaymentmaster = async (req,res)=>{
    try {
        const {id} = req.params
        const distDeleted = await Distributorpaymentmaster.query().deleteById(id);
        return res.status(200).json('Distributor deleted successfully')
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
        

    }
    
module.exports= { getAllDistributorPaymentMasters, addDistributorpaymentmasters,updateDistributorpaymentmaster,deleteDistributorpaymentmaster}



