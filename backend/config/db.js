const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshithyker43:Harshith30***@cluster0.rozg4.mongodb.net/')
.then(() => console.log(`[server] MongoDB connected`))
.catch(err => console.error(`[server] MongoDB connection error: ${err}`));

