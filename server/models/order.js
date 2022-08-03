const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    prodduct: [
      {
        name: {
          type: String,
        },
        quantity: {
          type: String,
          required: true,
          default: "0",
        },
      },
    ],

    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Order = mongoose.model("customer", orderSchema);
module.exports = Order;
