import type { Response } from './types/response';
export const response: Response = {
  // code 和 data 是可选项
  success({ message, code, data, success }) {
    return {
      success: success || true,
      code: code || 200,
      message: message || '请求成功',
      data
    };
  },
  failed({ message, code, data, success }) {
    return {
      success: success || false,
      code: code || 201,
      message: message || '请求失败',
      data
    };
  }
};
