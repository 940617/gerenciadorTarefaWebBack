
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/todo";

mongoose.connect(url, {UserNewUrParser: true});

module.exports = mongoose;