import { User } from "../models";

class UserServer {
  // 用户登录
  async findOneUser(filter) {
    try {
      const user = await User.findOne(filter);
      return user;
    } catch (error) {
      console.error("findOneUser", error);
      throw new Error(error as any);
    }
  }

  // 注册用户
  async createUserServer({ username, password }) {
    try {
      const res = await User.create({ username, password });
      return res;
    } catch (error) {
      console.error("createUserServer", error);
      throw new Error(error as any);
    }
  }

  // 用户登录
  async loginServer({ username, password }) {
    const filter = {
      $and: [{ username }, { password }],
    };
    try {
      const user = await new UserServer().findOneUser(filter);
      return user;
    } catch (error) {
      console.error("loginServer", error);
      throw new Error(error as any);
    }
  }
}

export default new UserServer();
