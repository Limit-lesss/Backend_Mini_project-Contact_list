const express = require("express");
const path = require("path");

const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

let contactList = [
  {
    name: "Aarav",
    number: "82838283828",
  },
  {
    name: "Anurag",
    number: "42232134134131",
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

app.post("/create-contact", (req, res) => {
    contactList.push(req.body);
    return res.redirect('back')
});

app.listen(8000, (err) => {
  if (err) console.log(err);
  else console.log("server started at port: " + port);
});
