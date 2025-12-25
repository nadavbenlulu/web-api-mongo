const express=require('express');
const router=require('express').Router();
const userController=require('../controllers/user');
const{getAllUser,getUserById,updateUserById,deleteUserById,addUser}=require('../controllers/user');

router.get('/',userController.getAllUser);
router.get('/:id',userController.getUserById);
router.post('/',userController.addUser);
router.put('/:id',userController.updateUserById);
router.delete('/:id',userController.deleteUserById);
module.exports=router;



