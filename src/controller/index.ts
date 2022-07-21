import userController from "./user.controller";
import articleController from "./article.controller";
import uploadController from "./upload.controller";

const { registerCtr, loginCtr, updateInfoCtr } = userController;
const { createArticleCtr, getArticleListCtr, getArticleByIdCtr } =
  articleController;
const { uploadFileCtr } = uploadController;

export {
  registerCtr,
  loginCtr,
  updateInfoCtr,
  uploadFileCtr,
  createArticleCtr,
  getArticleListCtr,
  getArticleByIdCtr,
};
