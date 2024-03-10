const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
})


const accountSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance : {
        type : Number,
        required : true
    }
})


const Account = mongoose.model("Account",accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    User ,Account
}