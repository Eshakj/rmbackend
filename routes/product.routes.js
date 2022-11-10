const { getAllProducts, addProduct, updateProduct, deleteProduct} = require("../controller/ProductController")
const router = require("express").Router()


router.get('/products', getAllProducts) 
router.post('/add-product', addProduct)
router.patch('/update-product/:id', updateProduct)
router.delete('/delete-product/:id', deleteProduct)



module.exports = router;
