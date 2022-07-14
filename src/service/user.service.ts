import { User } from "../models";

class UserServer {
  // 注册用户
  async createUser({ username, password }) {
    const user = await User.findOne({ username });
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
    } else {
      return {
        code: 1003,
        msg: "注册失败",
        id: res.id,
      };
    }
  }

  // 用户登录
  async findUser({ username, password }) {
    const filter = {
      $and: [{ username }, { password }],
    };
    const user = await User.findOne(filter);
    if (user?.id) {
      return {
        code: 200,
        msg: "登录成功",
      };
    } else {
      return {
        code: 1004,
        msg: "登录失败",
      };
    }
  }
}

export default new UserServer();
