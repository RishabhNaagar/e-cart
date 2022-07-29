const customerCtrl = require("../control/customer");
const router = require("express").Router();

router
    //.get("/customerlogin",customerCtrl.customerlog)
    .post("/signup",customerCtrl.customersignup)
    //.post("/customersignup",)
module.exports = router;