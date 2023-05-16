import { IServeResponse } from "./serve-data";

export interface IPostLoginAuth {
  email: string;
  name: string;
}

export interface IResponseLoginAuth {
  email: string;
  name: string;
  expiresIn: string;
  accessToken: string;
}

export interface IAuthResponse {
  error?: IServeResponse;
  user?: IResponseLoginAuth;
}