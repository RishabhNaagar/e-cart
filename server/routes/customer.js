const customerCtrl = require("../control/customer");
const router = require("express").Router();

router
  //.get("/customerlogin",customerCtrl.customerlog)
  .get("/check", customerCtrl.check)
  .post("/signup", customerCtrl.customersignup)
  .post("/login", customerCtrl.customerlogin)
  .get("/:shop/products", customerCtrl.showpro);
//.post("/customersignup",)
module.exports = router;
