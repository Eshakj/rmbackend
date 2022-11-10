const express = require("express")
const { getAllDistributorPaymentMasters, addDistributorpaymentmasters,updateDistributorpaymentmaster,deleteDistributorpaymentmaster } = require("../controller/DistributorPaymentMasterController")
const router = require("express").Router()

router.get("/distributorpaymentmaster", getAllDistributorPaymentMasters)
router.post("/add-distributorpaymentmaster", addDistributorpaymentmasters)
router.patch("/update-distributorpaymentmaster/:id", updateDistributorpaymentmaster)
router.delete("/delete-distributorpaymentmaster/:id", deleteDistributorpaymentmaster)

module.exports = router