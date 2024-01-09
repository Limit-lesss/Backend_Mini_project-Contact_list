const express = require("express");
const path = require("path");
const port = 8000;
const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
// //!middleware1
// app.use((req, res, next) => {
//   req.myName = "Aarav";
//   // console.log("middleware 1 is called!");
//   next();
// });
// //!middleware2
// app.use((req, res, next) => {
//   console.log(`My name is from MW2 ${req.myName}`);
//   // console.log("middleware 2 is called!");
//   next();
// });

let contactList = [
  {
    name: "Aarav",
    number: "8283828382",
  },
  {
    name: "Anurag",
    number: "7676987698",
  },
  {
    name: "Piddi",
    number: "9893827372",
  },
];

app.get("/", (req, res) => {
  Contact.find({}).then((contact) => {
    res.render("home", {
      title: "Contacts List",
      contact_list: contact,
    });
    // .catch((err) => console.log("error in fetching contact"));
  });
});

app.get("/about", (req, res) => {
  return res.render("about", {
    title: "About",
  });
});

app.get("/delete-contact/:id", (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then((contact) => {
      res.redirect("back");
    })
    .catch((err) => console.log("error in deleting contact"));
});

app.post("/create-contact", (req, res) => {
  // contactList.push(req.body);
  Contact.create({
    name: req.body.name,
    number: req.body.number,
  })
    .then((newContact) => {
      res.redirect("back");
    })
    .catch((err) => console.log("Error in creating contact!"));
});

app.listen(8000, (err) => {
  if (err) console.log(err);
  else console.log("server started at port: " + port);
});
