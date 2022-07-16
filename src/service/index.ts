import userService from "./user.service";
import articleService from "./article.service";

const { findOneUser, createUserServer } = userService;
const { addArticles, findArticles } = articleService;

export { findOneUser, createUserServer, addArticles, findArticles };
