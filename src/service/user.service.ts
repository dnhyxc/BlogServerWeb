class UserServer {
  async createUser({ username, password }) {
    // 写入数据库
    return "用户写入数据库成功，用户名称：" + username + " 密码：" + password;
  }
  async findUser({ username, password }) {
    // 写入数据库
    return "用户登录成功，用户名称：" + username + " 密码：" + password;
  }
}

export default new UserServer();
