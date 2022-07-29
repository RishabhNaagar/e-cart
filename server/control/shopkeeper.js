const  Shopkeeper = require("../models/customer.js");
const passport = require("passport");

//passport.use(Customer.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Shopkeeper.findById(id, function (err, user) {
    done(err, user);
  });
});
const shopkeeperCtrl={
    shopkeeperlogin: function(req,res){
        //console.log("wth");
        const shopkeeper = new Shopkeeper({
            username: req.body.username,
            password: req.body.password,
        });
        //console.log("errors");
        req.login(shopkeeper, function (err) {
            //console.log("wtf");
            if (err) {
              //console.log("error");
                console.log(err);
            } else {
                passport.authenticate("local")(req, res, function (){
                console.log("gg");
                //res.redirect("/dashboard");
                });
            }
        });
    },
    shopkeepersignup: function(req,res){
        console.log("register1");
        Shopkeeper.register(
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
                  console.log("succexx1");
                  //res.redirect("/dashboard");
                });
              }
            }
          );
    }
};

module.exports = shopkeeperCtrl;