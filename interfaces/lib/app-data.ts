import React from "react";
import { EClientStatusCode, EServerStatusCode, IServeResponse } from "./serve-data";

export type TActivePage = {
  renderPage: (page: IGetAccountPage | IGetPaymentPage | IGetSupportPage) => React.ReactNode;
} ;

// Promise representing the loading state
// Promise representing an additional message if the request takes longer than usual to complete.
export interface ILoadingPage {
  loadingPage: boolean;
  messageLoading?: string;
}

// Promise representing the response of the initial data retrieval for the AccountPage
export interface IGetAccountPage{
  data: any;
  error?: IServeResponse;
}

// Promise representing the response of the initial data retrieval for the PaymentPage
export interface IGetPaymentPage{
  data: any;
  error?: IServeResponse;
}

// Promise representing the response of the initial data retrieval for the SupportPage
export interface IGetSupportPage{
  data: any;
  error?: IServeResponse;
}

// Error pages display a message indicating whether the error is due to client-side or server-side issues.
export interface IGetErrorPage {
  statusCode: EClientStatusCode | EServerStatusCode;
  errorMessage: keyof EClientStatusCode | keyof EServerStatusCode;
}
