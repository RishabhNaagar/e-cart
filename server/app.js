const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
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

const dbConnect = require("./db/db");
dbConnect();

const customer_route = require("./routes/customer");
const shopkeeper_route = require("./routes/shopkeeper");

app.use("/customer/", customer_route);
app.use("/shopkeeper/", shopkeeper_route);

app.get("/", function (req, res) {
  //res.render("indexPage");
  console.log("hi");
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000 and ishaan");
});
// system hang
