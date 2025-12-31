const mongoose=require('mongoose');
const Product = require("../models/product");

const obj={
    getAllProducts:(req,res)=>{
         Product.find().then((data)=>{
      return res.status(200).json(data);
        }); 
    },
    getProductById:(req,res)=>{
          const id=req.params.id;
      Product.find({pid:id}).then((prod)=>{
         return res.status(200).json(prod);
      })
    },
        updateProductById:(req,res)=>{
               const pid=req.params.id;
      Product.updateOne({pid},req.body).then((prod)=>{
         return res.status(200).json(prod);
      });
    },
    deleteProductById:(req,res)=>{
           const pid=req.params.id;
      Product.deleteOne({pid}).then((prod)=>{
         return res.status(200).json(prod);
      })
    },
    addProduct:(req,res)=>{
          const pid = req.body.pid;
  Product.find({ pid: pid }).then((data) => {
    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: `product id ${pid} already exist` });
    } else {
      Product.insertOne(req.body).then((prod) => {
        return res.status(200).json(prod);
      });
    }
  });
    }
};

module.exports=obj;