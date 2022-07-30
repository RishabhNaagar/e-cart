const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const shopkeeperSchema = new mongoose.Schema(
  {
    name1: {
      type: String,
      required: true,
    },
    username1: {
      type: String,
      required: true,
    },
    email1: {
      type: String,
      required: true,
      unique: true,
    },
    password1: {
      type: String,
      required: true,
      default: "0",
    },
    state1: {
      type: String,
      default: false,
    },
    city1: {
      type: String,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

shopkeeperSchema.plugin(passportLocalMongoose);
const Shopkeeper = mongoose.model("shopkeeper", shopkeeperSchema);
passport.use(Shopkeeper.createStrategy());
module.exports = Shopkeeper;
