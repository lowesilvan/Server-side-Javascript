const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express();

// connect to MongoDb
const dbURI =
  "mongodb+srv://lowe:lowe@node-learn.8psqazv.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to database");
    // listen for requests
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middlewares & static files

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("./blogs");
});

// blog routes
app.use('/blogs', blogRoutes)

app.get("/about", (req, res) => {
  // res.send('<p>Home page</p>')
  res.render("about", { title: "About Us" });
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});