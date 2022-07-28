import mongoose from "mongoose";

const likeArticleSchema = new mongoose.Schema({
  userId: String,
  articleId: String,
});

const likeArticle = mongoose.model("likeArticles", likeArticleSchema);

export default likeArticle;
