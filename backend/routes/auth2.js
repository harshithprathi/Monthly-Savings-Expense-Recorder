const router = require('express').Router();
const User= require("../models/User");

router.post('/login', async(req, res) => {
    const data= {
        email: req.body.email,
        password: req.body.password
    };
    try {
        const check = await User.findOne({email: data.email});
        if(check){
            console.log("check",check);
            res.json(check);
        }
        else{
            res.json("User not found, please do signup");
        }
        
        // res.json(check);
            
    } catch (err) {
        res.json("Failed");
    }
});


module.exports = router;