const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    by: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: "0",
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
