import { IUser } from '../interfaces/user.interface';

export interface IAppState {
  loading: boolean;
  users: Array<IUser>;
  searchResult: Array<IUser>;
  searchIsActive: boolean;
}
