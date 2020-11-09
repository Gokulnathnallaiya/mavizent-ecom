import { createSelector } from 'reselect';

const selectUtil = state => state.app;

export const isLoading = createSelector(
  [selectUtil],
  app => app.Loading
);
