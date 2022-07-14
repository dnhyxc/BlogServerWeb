import Koa, { DefaultContext, DefaultState } from "Koa";
import koaBody from "koa-body";
import router from "../router";
import connectMongodb from "../db";

const app: Koa<DefaultState, DefaultContext> = new Koa();

// 链接数据库
connectMongodb();

// 注册解析参数的中间件
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

export default app;
