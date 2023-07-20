const router = require('express').Router();
const Data= require("../models/Data");
const User= require("../models/User");


router.get('/dashboard/:emailid/:currpage', async (req, res) => {
    try {
        const vals= await Data.find({email: req.params.emailid});
        console.log('vals',vals);
        // console.log("userdata",req.params.emailid);
        if(vals.length!==0){
            const page = parseInt(req.params.currpage) || 1;
            console.log('page',page);
            const limit = parseInt(req.query.limit) || 12;
            console.log('limit',limit);
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            let expenselist=vals[0]?.rowS;
            const paginatedexpenses=expenselist?.slice(startIndex, endIndex);
            const totalpages=Math.ceil(expenselist.length/limit);
            res.json({vals, page, paginatedexpenses, totalpages});
        }
        
    } catch (error) {
        console.log(error);
    }   
});

router.post('/dashboard', async(req, res) => {
    const data1= {
        email: req.body.email,
        rowS: req.body.row,
        columnS: req.body.column
    };
    console.log('backendmagic',data1);
    try {
        const check = await User.findOne({email: data1.email});
        const vals= await Data.findOne({email: data1.email});
        if(check){
            if(vals){
                await Data.updateMany({email: data1.email},{$set:{rowS: data1.rowS, columnS: data1.columnS}});
                // localStorage.setItem('user_email',JSON.stringify(res.data.email));
                // console.log("usermail",localStorage.getItem('user_email'));
                res.json(vals);
            }
            else{
                await Data.insertMany([data1]);
                res.json(vals);
            }
            
        }
        else{
            res.json("User Not Logged in");
        }
        
        
            
    } catch (err) {
        res.json("Failed");
    }
});


module.exports = router;



// const router = require('express').Router();
// const Data = require("../models/Data");
// const User = require("../models/User");

// // Update the GET route to handle pagination
// router.get('/dashboard', async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1; // Get the page number from query parameter or default to 1
//     const pageSize = parseInt(req.query.pageSize) || 12; // Get the page size from query parameter or default to 12

//     // Count the total documents
//     const vals= await Data.find({email:req.body.email});
//     console.log("vals",vals);
//     if(vals){
//         const totalCount = await vals?.rowS.length();
//         const totalPages = Math.ceil(totalCount / pageSize);
//         const data = await vals.rowS.find().skip((page - 1) * pageSize).limit(pageSize);
//         res.json({
//             vals: vals,
//             data,
//             page,
//             pageSize,
//             totalCount,
//             totalPages,
//             });
//     }
//     else{
//         response.json("Email not found")
//     }
    

//     // Calculate total pages based on page size
    

//     // Limit the number of documents to be retrieved based on the page and page size
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.post('/dashboard', async (req, res) => {
//   const data1 = {
//     email: req.body.email,
//     rowS: req.body.row,
//     columnS: req.body.column
//   };
//   try {
//     const check = await User.findOne({ email: data1.email });
//     const vals = await Data.findOne({ email: data1.email });
//     if (check) {
//       if (vals) {
//         await Data.updateMany({ email: data1.email }, { $set: { rowS: data1.rowS, columnS: data1.columnS } });
//         res.json(vals);
//       } else {
//         await Data.insertMany([data1]);
//         res.json(vals);
//       }
//     } else {
//       res.json("User Not Logged in");
//     }
//   } catch (err) {
//     res.json("Failed");
//   }
// });

// module.exports = router;
