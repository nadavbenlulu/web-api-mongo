const mongoose=require('mongoose');
let obj={
    getAllUser:(req,res)=>{
      
        const user=mongoose.model('user',userSchema);
        User.find().then((data)=>{
             return res.status(200).json(data);
            
        });
       
    },
    getUserById:(req,res)=>{

        return res.status(200).json({message:`Get user By Id`});
    },
        updateUserById:(req,res)=>{
        let id=req.params.id;
        return res.status(200).json({message:`update user id ${id} `});
    },
    deleteUserById:(req,res)=>{

        let id=req.params.id;
        return res.status(200).json({message:`Delete user id ${id} `});
    },
    addUser:(req,res)=>{

        return res.status(200).json({message:`New user`});
    }
};

module.exports=obj;

