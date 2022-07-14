class articleServer {
  // 新增文章
  async addArticles(id) {
    // 写入数据库
    return "文章添加成功" + id;
  }

  // 获取文章列表
  async findArticles(id) {
    // 写入数据库
    return {
      id,
      list: ["文章1", "文章2", "文章3"],
    };
  }
}

export default new articleServer();
