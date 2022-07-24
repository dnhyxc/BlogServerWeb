import userService from "./user.service";
import articleService from "./article.service";
import commentsService from "./comments.service";

const { findOneUser, findUserById, createUserServer, updateUser } = userService;
const { createArticle, findArticles, findArticleById, updateArticle } =
  articleService;

const { createComments, findCommentById, updateComments, giveLike } =
  commentsService;

export {
  findOneUser,
  findUserById,
  updateUser,
  createUserServer,
  createArticle,
  findArticles,
  findArticleById,
  updateArticle,
  createComments,
  findCommentById,
  updateComments,
  giveLike,
};
