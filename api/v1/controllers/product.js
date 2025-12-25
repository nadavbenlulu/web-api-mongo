const mongoose=require('mongoose');
let obj={
    getAllProducts:(req,res)=>{
        const productSchema=new mongoose.Schema({
            pid:Number,
            price:Number,
            pname:String
        });
        const Product=mongoose.model('products',productSchema);
        Product.find().then((data)=>{
             return res.status(200).json(data);
            
        });
       
    },
    getProductById:(req,res)=>{

        return res.status(200).json({message:`Get Product By Id`});
    },
        updateProductById:(req,res)=>{ // /product/66
        let id=req.params.id;
        return res.status(200).json({message:`update product id ${id} `});
    },
    deleteProductById:(req,res)=>{

        let id=req.params.id;
        return res.status(200).json({message:`Delete product id ${id} `});
    },
    addProduct:(req,res)=>{

        return res.status(200).json({message:`New Product`});
    }
};

module.exports=obj;