const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    //! we can put multiple validation here
  },
  number: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
