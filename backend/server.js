const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const Data=require('./models/Data')

// Middleware
app.use(express.json());
app.use(cors({
    origin: "https://monthly-savings-expense-recorder-frontend.vercel.app/",
    methods:['GET', 'POST', 'PATCH'],
}));
app.use(express.urlencoded({ extended: true }));

// Constants
const PORT = process.env.PORT || 4000;

// Configuration
dotenv.config();
require('./config/db');

// Routes
app.get('/welcome', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});

app.get('/api/welcome', (req, res) => {
    res.status(200).json({
        message: 'Hello World api!'
    });
});
app.use('/api/auth1', require('./routes/auth1'));
app.use('/api/auth2', require('./routes/auth2'));
app.use('/api/data1', require('./routes/data1'));
app.use('/api/dataupdate', require('./routes/dataupdate'));


app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});