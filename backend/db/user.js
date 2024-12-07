const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    crewFirstName: { 
           type: String, 
           requird: true, 
        },
  crewLastName: { 
           type: String, 
           requird: true ,
        },
  aadharNumber: {
       type: String, 
       requird: true ,
    },
  phoneNumber: 
  { 
    type: Number, 
    requird: true ,
},
  crewId: { type: String, requird: true ,},
  crewRole: { type: String, requird: true ,},
  license: { type: String, requird: true ,},
  yearsOfExperience: { type: Number, requird: true ,},
  status: { type: String, requird: true ,}


// username:{
//     type:String,
//     requird:true,
// },
// password:{
//     type:String,
//     requird:true,
// }

});
const User = mongoose.model('User',userSchema);
module.exports = User;