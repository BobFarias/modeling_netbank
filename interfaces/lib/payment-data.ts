
import { IAccount, EForeignCurrencies, IPocketMoney, ILocalMoney, ELocalCurrencies } from "./account-data";
import { IServeResponse } from "./serve-data";

// Promise representing the state responsible for handling the Iban and Swift
export interface IReceiverDetails {
  receiverIban: string;
  receiverSwift: string;
}

// Promise related to posting a payment
// The account is preselected as the first regular account
// Users can choose to pay using a pocket account
// Currency selection is required for payment if the payment is coming from a pocket account
export interface IPostPayment extends IReceiverDetails {
  senderAccountDetails: IAccount;
  senderCurrencyDetails?: keyof EForeignCurrencies | keyof ELocalCurrencies;
  amountPayment: number;
  datePayment: Date;
}

// Interface providing payment details
export interface IDetailsPayment {
  transactionId: string;
  receiptImage: string;
  transactionDate: Date;
  senderAccDetails: IAccount;
  receiverAccDetails: IReceiverDetails;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  currency: keyof EForeignCurrencies | keyof ELocalCurrencies;
  // optional details for the operation
  description?: string;
  fees?: number;
  exchangeRate?: number;
}

// Promise interface for the payment response
export interface IResponsePayment {
  paymentDetails?: IDetailsPayment;
  error?: IServeResponse;
}

// Post promise for retrieving SWIFT details after entering IBAN information
export interface IPostGetAccountDetails {
  receiverIban: string;
}

// Response promise containing SWIFT details after entering IBAN information
export interface IResponseGetAccountDetails {
  receiverSwift?: string;
  error?: IServeResponse;
}

// Promise for validating the account number and amount in a post request
export interface IPostValidateSenderAcc {
  senderAccountDetails: IAccount;
  senderMoney: ILocalMoney | IPocketMoney;
  amountPayment: number;
}

// Promise for validating the account number and amount in the response
export interface IResponseValidateSenderAcc {
  aprroved?: boolean;
  message?: string;
  error?: IServeResponse;
}