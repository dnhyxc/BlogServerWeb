import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  classify: {
    required: true,
    type: String,
  },
  tag: {
    required: true,
    type: String,
  },
  coverImage: String,
  abstract: String,
  createTime: Number,
  createUserId: String,
  authorId: String,
});

const Article = mongoose.model("articles", ArticleSchema);

export default Article;
