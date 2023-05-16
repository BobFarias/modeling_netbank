import { EClientStatusCode, EServerStatusCode, IServeResponse } from "./serve-data";

export interface ILoadingMessage {
  message?: string;
}

export interface ILoadingPage extends ILoadingMessage {
  loading: boolean;
}

export interface IGetAccountPage{
  data: any;
  error?: IServeResponse;
}

export interface IGetPaymentPage{
  data: any;
  error?: IServeResponse;
}

export interface IGetSupportPage{
  data: any;
  error?: IServeResponse;
}

export interface IGetErrorPage {
  statusCode: EClientStatusCode | EServerStatusCode;
  errorMessage: keyof EClientStatusCode | keyof EServerStatusCode;
}
