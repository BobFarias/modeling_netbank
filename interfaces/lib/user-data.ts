import { IRegularAccount, IPocketAccount } from "./account-data";

// User's accounts which can be of different types: regular accounts and pocket accounts.
// Users have at least one regular account.
// Pocket accounts can have multiple "pockets".
export interface IUserDetails {
  userId: number;
  name: string;
  email: string;
  regularAccount: Array<IRegularAccount>;
  pocketAccount?: IPocketAccount;
}



