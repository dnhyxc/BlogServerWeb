import userController from "./user.controller";
import articleController from "./article.controller";

const { registerCtr, loginCtr, updateInfoCtr } = userController;
const { createArticleCtr, getArticleListCtr } = articleController;

export {
  registerCtr,
  loginCtr,
  createArticleCtr,
  getArticleListCtr,
  updateInfoCtr,
};
