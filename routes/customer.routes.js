const { getAllCustomers, addCustomer, updateCustomer, deleteCustomer } = require("../controller/CustomerController");

const router = require("express").Router()
router.get('/customers', getAllCustomers)
router.post('/add-customer', addCustomer)
router.patch('/update-customer/:id', updateCustomer)
router.delete('/delete-customer/:id', deleteCustomer)

module.exports = router;