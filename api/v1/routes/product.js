const express=require('express');
const router=require('express').Router();
const productController=require('../controllers/product');
const {getAllProducts,getProductById,addProduct,deleteProductById,updateProductById}=require('../controllers/product');

router.get('/',productController.getAllProducts);
router.get('/:id',productController.getProductById); 
router.post('/',productController.addProduct); 
router.put('/:id',productController.updateProductById); 
router.delete('/:id',productController.deleteProductById); 

module.exports=router;