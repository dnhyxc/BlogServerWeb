interface IResponseBody {
  message: string;
  code?: number;
  data?: any | undefined;
  success?: boolean;
}
export interface Response {
  success: (body: IResponseBody) => IResponseBody;
  failed: (body: IResponseBody) => IResponseBody;
}
