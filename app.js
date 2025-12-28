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



// const mongoConstr=`mongodb+srv://${mongoUser}:${mongoPass}:${mongoServer}/appName=Cluster0`;
// console.log(mongoConstr)
mongoose.connect(mongoConstr).then((stat)=>{
    console.log("connected to mongodb");
})
const productSchema= new mongoose.Schema({
    pid:Number,
    price:Number,
    pname:String
});
const Product= new mongoose.model('products',productSchema);
Product.insertOne({pid:2,price:40,pname:"milk"});



module.exports=app;