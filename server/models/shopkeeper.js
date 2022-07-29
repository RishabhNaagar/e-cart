const mongoose = require("mongoose");
const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
        default: "0",
    },
    state:{
        type: Boolean,
        default: false
    },
    city:{
        type: Boolean,
        default: false
    },
},{ timestamps: true, versionKey: false});

module.exports = mongoose.model("Shop", ShopSchema);
