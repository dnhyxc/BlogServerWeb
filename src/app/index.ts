import Koa, { DefaultContext, DefaultState } from "Koa";
import koaBody from "koa-body";
import koaStatic from "koa-static";
import router from "../router";
import connectMongodb from "../db";
import errorHandler from "../utils";
import path from "path";

const app: Koa<DefaultState, DefaultContext> = new Koa();

// 链接数据库
connectMongodb();

// 注册解析参数的中间件
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "../upload"),
      keepExtensions: true,
    },
  })
);

app.use(koaStatic(path.join(__dirname, "../upload")));

app.use(router.routes()).use(router.allowedMethods());

app.on("error", errorHandler);

export default app;
