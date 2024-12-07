const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');
//middlewae
app.use(express.json());
//enable the cors 
app.use(cors());

////new crew memberadd
app.post('/newcrew', async (req, res) => {
    try {
      console.log('Request Body:', req.body); // Log the incoming request body
  
      const {
        crewFirstName,
        crewLastName,
        aadharNumber,
        phoneNumber,
        crewId,
        crewRole,
        license,
        yearsOfExperience,
        status,
      } = req.body;
   
      const user = new User({
        crewFirstName,
        crewLastName,
        aadharNumber,
        phoneNumber,
        crewId,
        crewRole,
        license,
        yearsOfExperience,
        status,
      });
  
      const savedUser=await user.save();
      console.log('Saved Crew Member:', savedUser);
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error saving crew member:', error); // Log the error details
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  
connectDB();

app.listen(port,()=>{
    console.log('server is listening on post 8000');
    
})