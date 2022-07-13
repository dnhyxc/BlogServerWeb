/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
import Koa, { DefaultContext, DefaultState } from "Koa";
declare const app: Koa<DefaultState, DefaultContext>;
export default app;
