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
  windowState: "minimized" | "open" | "fullscreen"
};

// Promise related to the details of the agent after successfully connecting with an agent
export interface IAgentDetails {
  idAgent: string;
  firstName: string;
  lastName: string;
}

// Interface with the details of the initialized support
export interface IConfigConnectSupport {
  idSupport: number;
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


// Promise response related to client messages
export interface IResponseClientMessage {
  successful?: boolean;
  error?: IServeResponse;
  errorMessage?: string;
}

// Type for a message in the chat, could be from user or agent
export interface IChatMessage {
  messageId: string;
  sender: IAgentDetails | IUserDetails;
  content: string;
  timestamp: Date;
}

// Interface related to the chat state which will contain the entire conversation
export interface IChatSession extends IConfigConnectSupport {
  messages: IChatMessage[];
  isActive: boolean; // Indicates if the chat session is active
  // Additional properties for context...
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