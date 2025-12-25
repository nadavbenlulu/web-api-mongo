// const express=require('express');
// const router=require('express').Router();
// const categoryController=require('../controllers/category');
// const{getALLCategory,getCategoryById,updateCategoryById,deleteCategoryById,addCategory}=require('../controllers/category');

// router.get('/',categoryController.getALLCategory);
// router.get('/:id',categoryController.getCategoryById);
// router.post('/',categoryController.addCategory);
// router.put('/:id',categoryController.updateCategoryById);
// router.delete('/:id',categoryController.deleteCategoryById);

// module.exports=router;
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

router.get('/', categoryController.getAllCategory);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.addCategory);
router.put('/:id', categoryController.updateCategoryById);
router.delete('/:id', categoryController.deleteCategoryById);

module.exports = router;

