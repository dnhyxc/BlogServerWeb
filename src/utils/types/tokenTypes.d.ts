export interface ICreateToken {
  payload: any;
  secretKey: string;
  expiresIn: number | string;
}

export interface IverifyToken {
  token: string;
  public_key: string;
}
