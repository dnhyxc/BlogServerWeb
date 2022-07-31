import Router from "koa-router";
import { getClassifyListCtr, getTagListCtr } from "../controller";

const router = new Router({ prefix: "/api" });

// 获取分类列表
router.post("/getClassifyList", getClassifyListCtr);

// 获取标签列表
router.post("/getTagList", getTagListCtr);

module.exports = router;
