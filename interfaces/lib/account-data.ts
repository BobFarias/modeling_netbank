export enum EForeignCurrencies {
  SEK="SWEDISH KRONA",
  NOK="NORWEGIAN KRONE",
  USD="US DOLAR",
  EUR="EURO",
}

export enum ELocalCurrencies {
  DKK = "DANISH KRONE"
}

// Interface for handling LocalMoney
// Validation should also be performed on the backend side.
// The amount can be positive or negative.
export interface ILocalMoney {
  amount: number;
  currency: keyof ELocalCurrencies;
}

// Interface for handling ForeignMoney
// Validation should also be performed on the backend side.
// The amount can be positive or negative.
export interface IPocketMoney {
  amount: number;
  currency: keyof EForeignCurrencies;
}


// Interface for account details
export interface IAccount  {
  idAccount: number;
  iban: string;
}

// Interface for account details along with the amount of money
// Regular account interface
export interface IRegularAccount extends IAccount, ILocalMoney{}

// Define types for pockets with specific foreign currencies.
// This is necessary to make sure that the PocketAccount will have just one pocket for each currency
export type SEKPocket = { amount: number; currency: EForeignCurrencies.SEK };
export type NOKPocket = { amount: number; currency: EForeignCurrencies.NOK };
export type USDPocket = { amount: number; currency: EForeignCurrencies.USD };
export type EURPocket = { amount: number; currency: EForeignCurrencies.EUR };

// Create a union type representing any of the defined pocket types.
export type AnyPocket = SEKPocket | NOKPocket | USDPocket | EURPocket;

// Define an interface for a pocket account, extending from IAccount.
// It contains an array of pockets, each of which can be of any defined pocket type.
export interface IPocketAccount extends IAccount {
  pockets: AnyPocket[];
}

// Essential function to add a new pocket to a pocket account
// It will ensure that the account does not have the currency that they are trying to create
export function addPocket(account: IPocketAccount, newPocket: AnyPocket): IPocketAccount | Error {
  // Check if the account already has a pocket with the same currency as the new pocket.
  if (account.pockets.some(pocket => pocket.currency === newPocket.currency)) {
    // If a pocket with the same currency exists, return an error.
    return new Error("A pocket with this currency already exists.");
  }
  // If no duplicate currency is found, add the new pocket to the account and return the updated account.
  return { ...account, pockets: [...account.pockets, newPocket] };
}
