const { getAllSuppliers, addSupplier, updateSupplier, deleteSupplier } = require("../controller/SupplierController")

const router = require("express").Router()

router.get("/suppliers", getAllSuppliers)
router.post("/add-supplier", addSupplier)
router.patch("/update-supplier/:id", updateSupplier)
router.delete("/delete-supplier/:id", deleteSupplier)

module.exports = router