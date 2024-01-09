const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contacts_list_db");

//! verify whether we have connected to db  or not
// access the db
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => console.log("Successfully connected to database"));
