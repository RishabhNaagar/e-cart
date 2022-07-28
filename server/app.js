const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use(
  session({
    secret: "Mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/buyitDB", {
  useNewUrlParser: true,
});

const customerSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  state: String,
  city: String,
  role: String,
});
const ShopSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  state: String,
  city: String,
  //product:[String]
});

customerSchema.plugin(passportLocalMongoose);

const customer = new mongoose.model("Customer", customerSchema);
const Shop = new mongoose.model("Shop", ShopSchema);

passport.use(customer.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/", function (req, res) {
  res.render("indexPage");
});

app.get("/signup", function (req, res) {
  res.render("singup");
});

app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/dashboard", function (req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    if (req.user.role === "Customer") {
      res.render("customerhome", { user: req.user });
    } else {
      res.render("shopkeeperhome", { user: req.user });
    }
  } else {
    res.redirect("/login");
  }
});
app.post("/signup", function (req, res) {
  res.redirect("signup");
});
app.post("/login", function (req, res) {
  res.redirect("login");
});
app.post("/register", function (req, res) {
  customer.register(
    {
      username: req.body.username,
      email: req.body.email,
      state: req.body.state,
      city: req.body.city,
      role: req.body.role,
    },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/signup");
      } else {
        passport.authenticate("local")(req, res, function () {
          console.log("succexx");
          res.redirect("/dashboard");
        });
      }
    }
  );
});
app.listen(3000, function (req, res) {
  console.log("Server started on port 3000 and ishaan");
});
// system hang
