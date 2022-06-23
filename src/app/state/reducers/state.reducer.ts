import { createReducer, on } from '@ngrx/store';
import { IAppState } from 'src/app/shared/models/redux/state.interface';
import {
  stateDeleteUser,
  stateSetSearchIsActive,
  stateSetSearchResult,
  stateSetUsers,
} from '../actions/state.action';
export const INITIAL_APP_STATE: IAppState = {
  loading: false,
  users: [],
  searchResult: [],
  searchIsActive: false,
};
export const appReducer = createReducer(
  INITIAL_APP_STATE,
  on(stateSetUsers, (state, { users }) => {
    return { ...state, users };
  }),
  on(stateSetSearchResult, (state, { searchResult }) => {
    return { ...state, searchResult };
  }),
  on(stateDeleteUser, (state, { id }) => {
    let users = state.users.filter((user) => user.id != id);
    let searchResult = state.searchResult.filter((user) => user.id != id);
    return { ...state, users, searchResult };
  }),
  on(stateSetSearchIsActive, (state, { searchIsActive }) => {
    return { ...state, searchIsActive };
  })
);
