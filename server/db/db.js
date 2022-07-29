const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const url = 'mongodb://localhost:27017/buyitDB';

const dbConnect = () => {
    mongoose
      .connect(url)
      .then(() => console.log(`db connected`))
      .catch((err) =>
        console.log({ msg: "error occured while db connection", err })
      );
  };
  
  module.exports = dbConnect;