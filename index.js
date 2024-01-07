const express = require("express");
const path = require("path");

const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
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
  return res.render("home", {
    title: "Contact List",
    contact_list: contactList,
  });
});

app.get("/about", (req, res) => {
  return res.render("about", {
    title: "About",
  });
});

app.get("/delete-contact/:id", (req, res) => {
  contactList.splice(parseInt(req.params.id), 1);
  return res.redirect("back");
});

app.post("/create-contact", (req, res) => {
  contactList.push(req.body);
  return res.redirect("back");
});

app.listen(8000, (err) => {
  if (err) console.log(err);
  else console.log("server started at port: " + port);
});
