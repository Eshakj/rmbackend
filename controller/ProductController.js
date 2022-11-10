const express = require("express")
const Product = require("../models/Product")

const getAllProducts= async(req,res)=>{
    try {
        //select all from customers
        const products = await Product.query()
        return res.status(200).json(products)

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }
 

}

const addProduct= async(req,res)=>{    
    try {
        const {product_code,product_name,product_cost_price,product_sell_price,product_vat,product_deposit,product_installment_amount,product_installment_count
        } = req.body
        const product={
            id :Math.floor(Math.random()* 100000),
            product_code,
            product_name,
            product_cost_price,
            product_sell_price,
            product_vat,
            product_deposit,
            product_installment_amount,
            product_installment_count
                
        }

        //select all from customers
        const products = await Product.query().insert(product)
        return res.status(200).json('product saved successfully')

    } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
    }

}

const updateProduct= async(req,res)=>{    
       try {
       const {id}= req.params
        const customerUpdated = await Product.query()
        .findById(id)
        .patch(req.body);
        return res.status(200).json('Product updated successfully')

       } catch (error) {
        console.error(error.message)
        return res.status(500).json(error.message)
       }
      }

const deleteProduct = async (req,res)=>{
        try {
            const {id} = req.params
        const numDeleted = await Product.query().deleteById(id);
        return res.status(200).json('Product deleted successfully')
        } catch (error) {
            console.error(error.message)
        res.status(500).json(error.message)
        }

    }
    





module.exports= { getAllProducts, addProduct, updateProduct,deleteProduct}



