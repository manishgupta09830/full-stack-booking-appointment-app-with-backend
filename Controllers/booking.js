const path = require('path');

const rootDir = require('../util/path');

const User =require('../models/Booking');
const { userInfo } = require('os');

exports.getBooking = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    
}

exports.postBooking = (req, res, next) => {
    console.log(req.body)
   
}

exports.getUser = async (req, res , next) =>{
    console.log("Getting Users Details");
    try {
        const data = await User.findAll()
        res.status(201).json(data);
    }
    catch{
        console.log(error);
        res.status(500).json({error:error})
    }
}

exports.postuser = async(req, res, next) =>{
    console.log("Adding Users");
    try{
        const Name = req.body.Name;
        const Email = req.body.Email;
        const Phonenumber = req.body.Phonenumber;
        
        if (!Phonenumber){
            throw new Error(" Please Enter Your Phone Number");
        }
        const data = await User.create({
            Name: Name,
            Email: Email,
            Phonenumber : Phonenumber
        })
        res.status(201).json({newUserDetails:data});
    
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
    
}

exports.deleteUserDetails= async (req,res,next) => {

    try{
        let userId = req.params.userId;
        if(!userId){
            res.status(400).json({error:"Id Missing"})
        }
        await User.destroy({where:{id:userId}});
        res.sendStatus(200);

    }
    catch(error){
        console.log(error)
        res.status(500).json("Error Occured")
    };
}
exports.editUser = async (req, res, next) => {
    try{
        
        const updatedname = req.body.Name;
        const updatedphone = req.body.Phonenumber;
        const updatedemail = req.body.Email;
        const id = req.params.id;

         console.log(req.params);
         console.log('abc');
       let User = await User.update(
            {
               name : updatedname,
                email:updatedemail,
                phn:updatedphone
            },
            {where:{id:id}})
            console.log("user",User);
  res.status(201).json({User});
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}
