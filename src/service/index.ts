import userService from "./user.service";
import articleService from "./article.service";

const { findOneUser, findUserById, createUserServer, updateUser } = userService;
const { createArticle, findArticles, findArticleById } = articleService;

export {
  findOneUser,
  findUserById,
  updateUser,
  createUserServer,
  createArticle,
  findArticles,
  findArticleById,
};
