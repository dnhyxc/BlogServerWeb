import userController from "./user.controller";
import articleController from "./article.controller";

const { registerCtr, loginCtr } = userController;
const { createArticleCtr, getArticleListCtr } = articleController;

export { registerCtr, loginCtr, createArticleCtr, getArticleListCtr };
