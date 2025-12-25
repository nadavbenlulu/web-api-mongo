const mongoose=require('mongoose');
let obj={
    getAllOrder:(req,res)=>{
        const orderSchema=new mongoose.Schema({
            pid:Number,
            price:Number,
            pname:String
        });
        const Order=mongoose.model('order',orderSchema);
        Order.find().then((data)=>{
             return res.status(200).json(data);
            
        });
       
    },
    getOrderById:(req,res)=>{

        return res.status(200).json({message:`Get order By Id`});
    },
        updateOrderById:(req,res)=>{
        let id=req.params.id;
        return res.status(200).json({message:`update order id ${id} `});
    },
    deleteOrderById:(req,res)=>{

        let id=req.params.id;
        return res.status(200).json({message:`Delete order id ${id} `});
    },
    addOrder:(req,res)=>{

        return res.status(200).json({message:`New order`});
    }
};

module.exports=obj;