const { getAllVat, addVat, updateVat, deleteVat} = require("../controller/VatController");

const router = require("express").Router()
router.get('/vat', getAllVat)
router.post('/add-vat', addVat)
router.patch('/update-vat/:id', updateVat)
router.delete('/delete-vat/:id', deleteVat)
module.exports = router;
