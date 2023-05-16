import { IRegularAccount, IPockeAccount } from "./account-data";

export interface IUserDetails {
  userId: number;
  name: string;
  email: string;
  regularAcount: Array<IRegularAccount>;
  pocketAccount?: IPockeAccount;
}



