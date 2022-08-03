const Customer = require("../models/customer.js");
const passport = require("passport");
const Product = require("../models/product.js");

//passport.use(Customer.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Customer.findById(id, function (err, user) {
    done(err, user);
  });
});
const customerCtrl = {
  customerlogin: function (req, res) {
    console.log("wtdddd");
    const customer = new Customer({
      username: req.body.username,
      password: req.body.password,
    });
    //console.log("errors");
    req.login(customer, function (err) {
      //console.log("wtf");
      if (err) {
        //console.log("error");
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          console.log("gg11");
          //res.redirect("/dashboard");
        });
      }
    });
  },
  customersignup: function (req, res) {
    console.log("register");
    Customer.register(
      {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        state: req.body.state,
        city: req.body.city,
      },
      req.body.password,
      function (err, user) {
        if (err) {
          console.log(err);
          // res.redirect("/signup");
        } else {
          passport.authenticate("local")(req, res, function () {
            console.log("succexx");
            //res.redirect("/dashboard");
          });
        }
      }
    );
  },
  showpro: function (req, res) {
    Product.find({ by: req.params.shop }, function (err, foundItem) {
      // console.log();
      console.log(foundItem);
    });
  },
};

module.exports = customerCtrl;
