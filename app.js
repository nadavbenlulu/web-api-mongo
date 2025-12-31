require ('dotenv').config();
const express= require('express');
const { pid } = require('process');
const app=express();
const productrouter=require('./api/v1/routes/product');
const orderrouter=require('./api/v1/routes/order');
const categoryrouter=require('./api/v1/routes/category');
const userrouter=require('./api/v1/routes/user');
const morgan=require('morgan');
const ipFilter=require('./api/v1/middelwares/ipFilter');
const mongoose=require('mongoose');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use('/product',productrouter);
app.use('/order',orderrouter);
app.use('/user',userrouter);
app.use('/category',categoryrouter);
const mongoUser=process.env.MONGO_USER;
const mongoPass=process.env.MONGO_PASS;
const mongoServer=process.env.MONGO_SERVER;
const mongoConstr = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/?appName=Cluster0`;
mongoose.connect(mongoConstr).then((stat)=>{
    console.log("connected to mongodb");
})
const productSchema= new mongoose.Schema({
    pid:Number,
    price:Number,
    pname:String
});
const Product= new mongoose.model('products',productSchema);
Product.insertOne({pid:12,price:20,pname:"gum"});
Product.find({pid:{$gt:3}},{pid:1,price:1,_id:0,pname:1}).then( (product)=>{
    console.log(product);
});

// הוספת מוצר חדש
// async function addProduct() {
//   await Product.create({ pid: 12, price: 20, pname: "gum" });
//   console.log("product added");
// }
// addProduct();


Product.deleteMany({ pid: 8 })
  .then(r => {
    console.log("deleted:", r.deletedCount);
    return Product.find({ pid: 8 });
  })
  .then(list => {
    console.log("after delete:", list);
  });





module.exports=app;