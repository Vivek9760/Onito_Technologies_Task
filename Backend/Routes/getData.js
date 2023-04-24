const express = require('express');
const router = express.Router();
const User = require('../DataBase/Model')


router.get('/getData', async(req,res)=>{

    try{
        let data = await User.find();
       res.status(200).send(data)
    }
    catch(error){
        console.log(error.message)
    }


})


module.exports = router