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

// Interface for account details along with the amount of money
// Pocket account interface
export interface IPockeAccount extends IAccount{
  pockets: Array<IPocketMoney>;
}
