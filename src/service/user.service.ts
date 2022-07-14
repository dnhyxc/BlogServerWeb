import { User } from "../models";

/**
 * , (err, docs) => {
      if (!err) {
        if (!password || !username) {
          console.log(docs, "docs");
          return "用户名或密码不能为空";
        }
        if (docs.username === username) {
          console.log(docs.username, "docs");
          return "当前用户名已存在";
        }
        console.log("sssssssssssssss");
        User.create({ username, password });
      }
    }
 */
class UserServer {
  async createUser({ username, password }) {
    const user = await User.findOne({ username });
    console.log(user, "user");
    if (!username || !password) {
      return {
        code: 1001,
        msg: "用户名或密码不能为空",
      };
    }
    if (user?.username === username) {
      return {
        code: 1002,
        msg: "当前用户名已存在",
      };
    }
    const res = await User.create({ username, password });
    if (res.id) {
      return {
        code: 200,
        msg: "注册成功",
        id: res.id,
      };
    }
  }
  async findUser({ username, password }) {
    // 写入数据库
    return "用户登录成功，用户名称：" + username + " 密码：" + password;
  }
}

export default new UserServer();
