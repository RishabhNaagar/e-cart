const shopkeeperCtrl = require("../control/shopkeeper");
const router = require("express").Router();

router
    //.get("/customerlogin",customerCtrl.customerlog)
    .post("/signup",shopkeeperCtrl.shopkeepersignup)
    .post("/login",shopkeeperCtrl.shopkeeperlogin)
    //.post("/customersignup",)
module.exports = router;