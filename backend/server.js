const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const Data=require('./models/Data')

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Constants
const PORT = process.env.PORT || 4000;

// Configuration
dotenv.config();
require('./config/db');

// // Routes
// app.get('/signup', (req, res) => {
    // res.status(200).json({
    //     message: 'Hello World!'
    // });
//     console.log(res.status);
// });
app.use('/api/auth1', require('./routes/auth1'));
app.use('/api/auth2', require('./routes/auth2'));
app.use('/api/data1', require('./routes/data1'));
app.use('/api/dataupdate', require('./routes/dataupdate'));


app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});