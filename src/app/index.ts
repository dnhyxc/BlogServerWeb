import Koa, { DefaultContext, DefaultState } from "Koa";
import koaBody from "koa-body";
import { userRouter } from "../router";

const app: Koa<DefaultState, DefaultContext> = new Koa();

// 注册解析参数的中间件
app.use(koaBody());

app.use(userRouter.routes());

export default app;
