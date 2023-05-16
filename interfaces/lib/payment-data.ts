
import { IAccount, EForeignCurrencies, IPocketMoney, ILocalMoney } from "./account-data";
import { IServeResponse } from "./serve-data";

export interface IReceiverDetails {
  receiverIban: string;
  receiverSwift: string;
}

export interface IPostPayment extends IReceiverDetails {
  senderAccountDetails: IAccount;
  senderCurrencyDetails?: keyof EForeignCurrencies;
  amountPayment: number;
}

export interface IDetailsPayment {
  receiptImage: string;
  transcationDate: Date;
  senderAccDetails: IAccount;
  receiverAccDetails: IReceiverDetails;
}

export interface IResponsePayment {
  paymentDetails?: IDetailsPayment;
  error?: IServeResponse;
}

export interface IPostGetAccountDetails {
  receiverIban: string;
}

export interface IResponseGetAccountDetails {
  receiverSwift?: string;
  error?: IServeResponse;
}

export interface IPostValidateSenderAcc {
  senderAccountDetails: IAccount;
  senderMoney: ILocalMoney | IPocketMoney;
  amountPayment: number;
}

export interface IResponseValidateSenderAcc {
  aprroved?: boolean;
  message?: string;
  error?: IServeResponse;
}