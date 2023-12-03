export interface IBaseResponse {
  success?: boolean;
  data?: object | object[];
  info?: object;
  message?: string;
}

export interface ISwaggerResponseOptions {
  module?: string;
  link?: string;
  RestApi?: string;
  description?: string;
  apiConsumes?: string;
  status?: number;
  descriptionSwagger?: string;
}
