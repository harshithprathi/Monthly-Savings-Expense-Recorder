const router = require('express').Router();
const User= require("../models/User");

router.get('/profile', async (req, res) => {
    try {
        const vals= await User.find();
        console.log('vals',vals);
        if(vals){
            res.json(vals);
        }
        
    } catch (error) {
        console.log(error);
    }   
});

router.patch('/profile', async(req, res) => {
    console.log(' req data',req.body);
    const data= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        occupation: req.body.occupation,
        email: req.body.email
    };

    try {
        const check = await User.findOne({email: data.email});
        // console.log('check',check);
        if(check){
            await User.updateMany({email: data.email},{$set: {firstName: data?.firstName||"", lastName: data?.lastName||"", occupation: data?.occupation||""}});
            // console.log('data',data);
            res.json(data);
        }
        else{
            res.json("Email Not Found");
        }
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;