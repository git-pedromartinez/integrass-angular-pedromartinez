import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/interfaces/user.interface';

export const stateSetUsers = createAction(
  '[State SetUsers] set data',
  props<{ users: Array<IUser> }>()
);
export const stateSetSearchResult = createAction(
  '[State SetSearchResult] set data to array of users, result of search',
  props<{ searchResult: Array<IUser> }>()
);
export const stateDeleteUser = createAction(
  '[State DeleteUser] delete of storage',
  props<{ id: number }>()
);
export const stateSetSearchIsActive = createAction(
  '[State SetSearchIsActive]',
  props<{ searchIsActive: boolean }>()
);
