const mongoose=require('mongoose');
let obj={
    getAllCategory:(req,res)=>{
        const productSchema=new mongoose.Schema({
            pid:Number,
            price:Number,
            pname:String
        });
        const Category=mongoose.model('category',categorySchema);
        Category.find().then((data)=>{
             return res.status(200).json(data);
            
        });
       
    },
    getCategoryById:(req,res)=>{

        return res.status(200).json({message:`Get Category By Id`});
    },
        updateCategoryById:(req,res)=>{
        let id=req.params.id;
        return res.status(200).json({message:`update category id ${id} `});
    },
    deleteCategoryById:(req,res)=>{

        let id=req.params.id;
        return res.status(200).json({message:`Delete category id ${id} `});
    },
    addCategory:(req,res)=>{

        return res.status(200).json({message:`New category`});
    }
};

module.exports=obj;