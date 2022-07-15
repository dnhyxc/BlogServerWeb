import userService from "./user.service";
import articleService from "./article.service";

const { findOneUser, createUserServer, loginServer } = userService;
const { addArticles, findArticles } = articleService;

export {
  findOneUser,
  createUserServer,
  loginServer,
  addArticles,
  findArticles,
};
