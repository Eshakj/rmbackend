const { getAllDistributors, addDistributor, updateDistributor, deleteDistributor } = require("../controller/DistributorController")

const express = require("express")
const router = require("express").Router()


router.get("/distributors", getAllDistributors)
router.post("/add-distributor", addDistributor)
router.patch("/update-distributor/:id", updateDistributor)
router.delete("/delete-distributor/:id", deleteDistributor)


module.exports = router