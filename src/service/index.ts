import userService from "./user.service";
import articleService from "./article.service";

const { findOneUser, findUserById, createUserServer, updateUser } = userService;
const { addArticles, findArticles } = articleService;

export {
  findOneUser,
  findUserById,
  createUserServer,
  addArticles,
  findArticles,
  updateUser,
};
