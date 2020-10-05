var mongoose = require('mongoose');

var schema = mongoose.Schema({
        name:String,
        phone:String,
        email:String,
});

var Contact = module.exports = mongoose.model('contactShema',schema);