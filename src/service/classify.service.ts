import { Article } from "../models";

class classifyServer {
  // 获取文章分类
  async getClassifyList({ pageNo = 1, pageSize = 20 }) {
    const list = await Article.aggregate([
      {
        $match: {
          isDelete: { $nin: ["true", true] },
        },
      },
      {
        $group: {
          _id: "$classify",
          count: { $sum: 1 },
          articles: { $addToSet: { title: "$title", id: "$_id" } },
          // 使用$push存在一个问题，如果是存在重复的数据，重复的数据也会一起放入到返回的结果中，对于这样子的情况使用以下操作：
          // articles: { $push: "$title" },
        },
      },
      { $sort: { count: -1 } },
      { $skip: (pageNo - 1) * pageSize },
      { $limit: pageSize },
      // { $limit: 2 },
      // { $skip: (1 - 1) * 2 },
      {
        $project: {
          _id: 0, // 默认情况下_id是包含的，将_id设置为0|false，则选择不包含_id，其他字段也可以这样选择是否显示。
          classify: "$_id", // 将_id更名为classify
          articles: 1, // 设置articles为显示
          count: 1,
        },
      },
    ]);
    return list;
  }

  // 获取标签
  async getTagList({ pageNo = 1, pageSize = 20 }) {
    const list = await Article.aggregate([
      {
        $match: {
          isDelete: { $nin: ["true", true] },
        },
      },
      {
        $group: {
          _id: "$tag",
          value: { $sum: 1 },
          // 使用$push存在一个问题，如果是存在重复的数据，重复的数据也会一起放入到返回的结果中，对于这样子的情况使用以下操作：
          // articles: { $push: "$title" },
        },
      },
      {
        $project: {
          _id: 0, // 默认情况下_id是包含的，将_id设置为0|false，则选择不包含_id，其他字段也可以这样选择是否显示。
          name: "$_id", // 将_id更名为classify
          value: 1,
        },
      },
    ]);
    return list;
  }
}

export default new classifyServer();
