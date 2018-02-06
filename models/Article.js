var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
  Kotaku: {
    type: Schema.Types.ObjectId,
    ref: "Kotaku"
  }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
