import userController from "./user.controller";
import articleController from "./article.controller";
import uploadController from "./upload.controller";
import commentsController from "./comments.controller";

const { registerCtr, loginCtr, updateInfoCtr } = userController;
const {
  createArticleCtr,
  getArticleListCtr,
  getArticleByIdCtr,
  deleteArticleCtr,
} = articleController;
const { uploadFileCtr } = uploadController;
const { createCommentsCtr, findCommentsById, giveLikeCtr, deleteCommentCtr } =
  commentsController;

export {
  registerCtr,
  loginCtr,
  updateInfoCtr,
  uploadFileCtr,
  createArticleCtr,
  getArticleListCtr,
  getArticleByIdCtr,
  createCommentsCtr,
  findCommentsById,
  giveLikeCtr,
  deleteCommentCtr,
  deleteArticleCtr,
};
