const { getAllDistributorinvoicetxns, addDistributorinvtxn, updateDistributorinvtxn, deleteDistributorinvtxn } = require("../controller/DistributorinvoicetxnController")
const router = require("express").Router()

router.get("/distributorinvoicetxns",getAllDistributorinvoicetxns)
router.post("/add-distributorinvoicetxn",addDistributorinvtxn)
router.patch("/update-distributorinvoicetxn/:id",updateDistributorinvtxn)
router.delete("/delete-distributorinvoicetxn/:id",deleteDistributorinvtxn)

module.exports = router