import userService from "./user.service";
import articleService from "./article.service";
import commentsService from "./comments.service";
import likeService from "./like.service";
import likeArticleService from "./likeArticle.service";

const { findOneUser, findUserById, createUserServer, updateUser } = userService;
const {
  createArticle,
  findArticles,
  findArticleById,
  updateArticle,
  deleteArticles,
  likeArticle,
} = articleService;

const {
  createComments,
  findCommentById,
  updateComments,
  giveLike,
  deleteComment,
} = commentsService;

const { createLike } = likeService;

const { checkLikeArticle } = likeArticleService;

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
  createLike,
  deleteComment,
  deleteArticles,
  likeArticle,
  checkLikeArticle,
};
