export enum EForeignCurrencies {
  SEK="SWEDISH KRONA",
  NOK="NORWEGIAN KRONE",
  USD="US DOLAR",
  EUR="EURO",
}

export enum ELocalCurrencies {
  DKK = "DANISH KRONE"
}

export interface ILocalMoney {
  amount: number;
  currency: keyof ELocalCurrencies;
}

export interface IPocketMoney {
  amount: number;
  currency: keyof EForeignCurrencies;
}

export interface IAccount  {
  idAccount: number;
  iban: string;
}

export interface IRegularAccount extends IAccount, ILocalMoney{}

export interface IPockeAccount extends IAccount{
  pockets: Array<IPocketMoney>;
}
