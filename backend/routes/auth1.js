const router = require('express').Router();
const User= require("../models/User");

router.post('/signup', async(req, res) => {
    const data= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        occupation: req.body.occupation,
        password: req.body.password,
    };
    try {
        const check = await User.findOne({email: data.email});
        if(check){
            res.json("exists");
        }
        else{
            await User.insertMany([data]);
        }
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;