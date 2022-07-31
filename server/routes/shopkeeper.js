const shopkeeperCtrl = require("../control/shopkeeper");
const router = require("express").Router();

router
  //.get("/customerlogin",customerCtrl.customerlog)
  .post("/signup", shopkeeperCtrl.shopkeepersignup)
  .post("/login", shopkeeperCtrl.shopkeeperlogin)
  .get("/:id/addproduct", shopkeeperCtrl.addproduct);
//.post("/customersignup",)
module.exports = router;
