const mongoose = require('mongoose');
const connectDB = async()=>{

    try{
        await mongoose.connect('mongodb+srv://ansuljain789:7ZEfXov3pgP4O31Z@clusterone.p7mhd.mongodb.net/ansulll');
        console.log('connected to MongoDB');
        
    }
    catch(error){
        console.log(error);   
    }

    }  
module.exports = connectDB;