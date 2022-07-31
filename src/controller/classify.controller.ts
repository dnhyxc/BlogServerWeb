import { getClassifyList, getTagList } from "../service";
import { databaseError } from "../constant";

class classifyController {
  // 创建文章
  async getClassifyListCtr(ctx, next) {
    const { pageNo, pageSize } = ctx.request.body;
    try {
      // 操作数据库
      const res = await getClassifyList({ pageNo, pageSize });
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "获取分类列表成功",
        data: res,
      };
    } catch (error) {
      console.error("getClassifyListCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 创建文章
  async getTagListCtr(ctx, next) {
    const { pageNo, pageSize } = ctx.request.body;
    try {
      // 操作数据库
      const res = await getTagList({ pageNo, pageSize });
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "获取标签列表成功",
        data: res,
      };
    } catch (error) {
      console.error("getTagListCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
}

export default new classifyController();
