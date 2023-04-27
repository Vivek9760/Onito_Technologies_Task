const express = require('express');
const router = express.Router();
const User = require('../DataBase/Model');
const {body,validationResult} = require('express-validator')


router.post('/postData',[
    body('name',"Enter a valid name").exists(),
    body('age',"Enter a valid age").exists(),
    body('sex',"Enter a valid sex").exists(),
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