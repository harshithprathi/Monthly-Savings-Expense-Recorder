const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    email:{
        type: 'string',
        unique: true
    },
    rowS:[],
    columnS:[]
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;