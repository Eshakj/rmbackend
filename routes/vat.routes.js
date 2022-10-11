const { getAllVat, addVat} = require("../controller/VatController");

const router = require("express").Router()
router.get('/vat', getAllVat)
router.post('/add-vat', addVat)
// router.patch('/update-product/:id', updateCustomer)
// router.delete('/delete-product/:id', deleteCustomer)
module.exports = router;
// , updateCustomer, deleteCustomer 