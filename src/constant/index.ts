// 操作数据库报错统一错误提示
const databaseError = {
  code: "10000",
  message: "数据库错误",
  result: "",
};

const userFormateError = {
  code: "10001",
  message: "用户名或密码不能为空",
  result: "",
};

const userAlreadyExited = {
  code: "10002",
  message: "用户已存在",
  result: "",
};

const userRegisterError = {
  code: "10003",
  message: "用户注册错误",
  result: "",
};

const userLoginError = {
  code: "10004",
  message: "用户登录错误",
  result: "",
};

const userNotFind = {
  code: "10006",
  message: "用户不存在",
  result: "",
};

const userPwdError = {
  code: "10005",
  message: "密码错误",
  result: "",
};

export {
  databaseError,
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userLoginError,
  userPwdError,
  userNotFind,
};
