import { FilterQuery } from "mongoose";
import { User } from "../models";

type FilterParams = FilterQuery<{
  username: string;
  password?: string | undefined;
}>;

interface UserParams {
  username: string;
  password: string;
  id: number;
}

class UserServer {
  // 用户登录
  async findOneUser(filter: FilterParams) {
    try {
      const user: any = await User.findOne(filter);
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
}

export default new UserServer();
