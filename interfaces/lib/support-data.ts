import { IServeResponse } from "./serve-data";
import { IUserDetails } from "./user-data";

export interface IAgentDetails {
  idSupport: number;
  firstName: string;
  lastName: string;
  protocolNumber : number;
}

export interface IConfigConnectSupport {
  protocolNumber: number;
  userDetails: IUserDetails;
}

export interface IPostConnectSupport extends IConfigConnectSupport {}
export interface IPostQueueSupport extends IConfigConnectSupport {}

export interface IResponseConnectSupport {
  connectionSucessful?: IAgentDetails;
  error?: IServeResponse;
}

export interface IResponseQueueSupport {
  position: number;
  leastBusyDay?: string;
  leastBusyTime?: string;
}

export interface IClientMessage {
  message: string;
  userDetails: IUserDetails;
}

export interface IReceiveMessage {
  message: string;
  agentDetails: IAgentDetails;
}

export interface ISupportMessages {
  dataSupport: Array<IClientMessage | IReceiveMessage>
}

export interface IPostClosingConnection {
  protocolNumber: number;
}

export interface IResponseClosingConnection {
  successful?: boolean;
  error?: IServeResponse;
}