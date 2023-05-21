import React from "react";
import { IGetSupportPage } from "./app-data";
import { IServeResponse } from "./serve-data";
import { IUserDetails } from "./user-data";

// Tracking the chat window model
// The chat window can be in "minimized", "open", or "full-screen" state.
export type TSupportWindow = IGetSupportPage & {
  renderPage: (page: TWindowChat) => React.ReactNode;
};

export type TWindowChat = {
  windowState: "minized" | "open" | "fullscreen"
};


// Promise related to the details of the agent after successfully connecting with an agent
export interface IAgentDetails {
  idSupport: number;
  firstName: string;
  lastName: string;
  protocolNumber : number;
}

// Interface with the details of the initialized support
export interface IConfigConnectSupport {
  protocolNumber: number;
  userDetails: IUserDetails;
}

// Interface related to the post when the user starts a new chat
export interface IPostConnectSupport extends IConfigConnectSupport {}

// Interface related to the post when the user needs to join the queue
export interface IPostQueueSupport extends IConfigConnectSupport {}

// Interface promise related to the connection with the support
export interface IResponseConnectSupport {
  connectionSucessful?: IAgentDetails;
  error?: IServeResponse;
}

// Promise responsible for the response on the queue
export interface IResponseQueueSupport {
  position: number;
  leastBusyDay?: string;
  leastBusyTime?: string;
}

// Promise post related to client messages
export interface IPostClientMessage {
  message: string;
  userDetails: IUserDetails;
}

// Promise response related to client messages
export interface IResponseClientMessage {
  successful?: boolean;
  error?: IServeResponse;
}

// Promise get related to agent messages
export interface IReceiveMessage {
  message: string;
  agentDetails: IAgentDetails;
}

// Interface related to the chat state which will contain the entire conversation
export interface ISupportMessages {
  dataSupport: Array<IPostClientMessage | IReceiveMessage>
}

// Promise representing the post request to close the connection
export interface IPostClosingConnection {
  protocolNumber: number;
}

// Promise representing the response after finishing the support
export interface IResponseClosingConnection {
  successful?: boolean;
  error?: IServeResponse;
}