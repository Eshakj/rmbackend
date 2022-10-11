const { getAllCustomers, addCustomer} = require("../controller/CustomerController");

const router = require("express").Router()
router.get('/products', getAllCustomers)
router.post('/add-product', addCustomer)
// router.patch('/update-product/:id', updateCustomer)
// router.delete('/delete-product/:id', deleteCustomer)
module.exports = router;
// , updateCustomer, deleteCustomer 