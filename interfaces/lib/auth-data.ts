import { IServeResponse } from "./serve-data";

// Promise representing the authentication POST request
export interface IPostLoginAuth {
  email: string;
  name: string;
}

// Promise representing the response of the authentication POST request
export interface IResponseLoginAuth {
  email: string;
  name: string;
  expiresIn: number; // SECONDS
  accessToken: string;
}

// Promise representing the login page state for rendering an error or the user details.
export interface IAuthResponse {
  error?: IServeResponse;
  user?: IResponseLoginAuth;
}