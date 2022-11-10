const express = require("express")
const { getAllDistributorPaymentAllocations, addDistributorpaymentAllocation,updateDistributorpaymentAllocation,deleteDistributorpaymentAllocation } = require("../controller/DistributorPaymentAllocation")
const router = require("express").Router()

router.get("/dpa", getAllDistributorPaymentAllocations)
router.post("/add-dpa", addDistributorpaymentAllocation)
router.patch("/update-dpa/:id", updateDistributorpaymentAllocation)
router.delete("/delete-dpa/:id", deleteDistributorpaymentAllocation)

module.exports = router