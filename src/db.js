const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  "mongodb+srv://lokendra0905:lokendra@cluster0.bhlgaca.mongodb.net/full-throttle?retryWrites=true&w=majority"
);

module.exports = { connection };
