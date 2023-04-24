const express = require('express');
const router = express.Router();
const User = require('../DataBase/Model');
const {body,validationResult} = require('express-validator')


router.post('/postData',[
    body('email',"Enter a valid Email").isEmail(),
    body('name',"Enter a valid name").exists(),
    body('age',"Enter a valid age").exists(),
    body('sex',"Enter a valid sex").exists(),
    body('mobile',"Enter a valid mobile number").isLength({min:10,max:10}),
    body('aadhar',"Enter a valid aadhar number").isLength({min:12,max:12}),
    body('pan',"Enter a valid pan number").isLength({min:10,max:10}),
    body('emergencyContact',"Enter a valid emergency Contact number").isLength({min:10,max:10}),
] ,async(req,res)=>{

    try{
        const error =  validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send(error.array()) ;
        }
        let data =new User({...req.body});
        await data.save()
        res.send(data)
    }
    catch(error){
        console.log(error.message)
    }
})


module.exports = router