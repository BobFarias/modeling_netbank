export enum EClientStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}

export enum EServerStatusCode {
  OK = 200,
  INTERNAL_ERROR = 500,
  BAD_GATEWAY = 502

}

export interface IServeResponse {
  message: string;
  statusCode: number;
}
