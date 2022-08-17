const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const contactsSchema = new mongoose.Schema({
    email:{
        type:String,
        default:null
    },
    name:{
        type:String,
        default:null
    },
    phone:{
        type:String,
        default:null
    },
    product:{
        type:String,
        default:null
    },
    quantity:{
        type:Number,
        default:null
    },
    address:{
        type:String,
        default:null
    }
});

module.exports = mongoose.model('Contact', contactsSchema);