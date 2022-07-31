import Router from "koa-router";
import { getClassifyListCtr } from "../controller";

const router = new Router({ prefix: "/api" });

// 获取分类列表
router.post("/getClassifyList", getClassifyListCtr);

module.exports = router;
