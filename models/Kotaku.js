var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var KotakuSchema = new Schema({

  title: String,
  body: String,
  img: String
});

var Kotaku = mongoose.model("Kotaku", KotakuSchema);
l
module.exports = Kotaku;
