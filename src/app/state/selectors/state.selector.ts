import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/models/redux/state.interface';

export const stateFeatureSelectors = createFeatureSelector<IAppState>('app');
export const stateUsersSelector = createSelector(
  stateFeatureSelectors,
  (state: IAppState) => state.users
);
export const stateSearchResult = createSelector(
  stateFeatureSelectors,
  (state: IAppState) => state.searchResult
);
export const stateSearchIsActiveSelector = createSelector(
  stateFeatureSelectors,
  (state: IAppState) => state.searchIsActive
);
