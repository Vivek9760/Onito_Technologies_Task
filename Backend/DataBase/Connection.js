
module.exports = (async function(){
    const mongoose = require('mongoose');
    await mongoose.connect(process.env.URL);
    console.log("Connect to the database successfully")
})()