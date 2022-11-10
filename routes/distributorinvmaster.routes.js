const express = require("express")
const { getAllDistInvMasters, addDistInvMaster, updateDistInvMaster, deleteDistInvMaster } = require("../controller/DistributorInvoiceMasterController")
const router = require("express").Router()

router.get("/dim", getAllDistInvMasters)
router.post("/add-dim", addDistInvMaster)
router.patch("/update-dim/:id", updateDistInvMaster)
router.delete("/delete-dim/:id", deleteDistInvMaster)

module.exports = router