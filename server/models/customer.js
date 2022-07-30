const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const customerSchema = new mongoose.Schema(
  {
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
    state: {
      type: String,
      default: false,
    },
    city: {
      type: String,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

customerSchema.plugin(passportLocalMongoose);
const Customer = mongoose.model("customer", customerSchema);
passport.use(Customer.createStrategy());
module.exports = Customer;
