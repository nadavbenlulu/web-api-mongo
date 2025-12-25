// const express=require('express');
// const router=require('express').Router();
// const orderController=require('../controllers/order');
// const{getALLOrder,getOrderById,updateOrderById,deleteOrderById,addOrder}=require('../controllers/order');


// router.get('/',orderController.getALLOrder);
// router.get('/id:',orderController.getOrderById);
// router.post('/',orderController.addOrder);
// router.put('/id:',orderController.updateOrderById);
// router.delete('/id:',orderController.deleteOrderById);
// module.exports=router;
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');

router.get('/', orderController.getAllOrder); 
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.addOrder);
router.put('/:id', orderController.updateOrderById);
router.delete('/:id', orderController.deleteOrderById);

module.exports = router;
