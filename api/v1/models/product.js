const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    pid:Number,
    price:Number,
    pname:String
});
// הכנסת מוצר חדש 
// Product.insertOne({pid:12,price:20,pname:"gum"});

//חיפוש מוצר קיים
// Product.find({pid:{$gt:3}},{pid:1,price:1,_id:0,pname:1}).then( (product)=>{
//     console.log(product);
// });

// מוחק מספר מוצרים לפי ה- id:
// Product.deleteMany({ pid: 8 })
//   .then(r => {
//     console.log("deleted:", r.deletedCount);
//     return Product.find({ pid: 8 });
//   })
//   .then(list => {
//     console.log("after delete:", list);
//   });