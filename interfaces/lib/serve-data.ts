// Client errors and messages
export enum EClientStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}

// Server errors and messages
export enum EServerStatusCode {
  OK = 200,
  INTERNAL_ERROR = 500,
  BAD_GATEWAY = 502

}

// Generic status code and error message
export interface IServeResponse {
  message: string;
  statusCode: number;
}
