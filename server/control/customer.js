const Customer = require("../models/customer.js");
const passport = require("passport");

//passport.use(Customer.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Customer.findById(id, function (err, user) {
    done(err, user);
  });
});
const customerCtrl={
    // customerlog: function (req,res) {
    //     const Customer = new customer({
    //         username: req.body.username,
    //         password: req.body.password,
    //       });
    //       //console.log("errors");
    //       req.login(user, function (err) {
    //         if (err) {
    //           //console.log("error");
    //           console.log(err);
    //         } else {
    //           passport.authenticate("local")(req, res, function () {
    //             //res.redirect("/dashboard");
    //             console.log("success");
    //           });
    //         }
    //       });
    // },
    customersignup: function(req,res){
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
    }
};

module.exports = customerCtrl;