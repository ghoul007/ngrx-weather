import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducers';

export const selectHomeState = createFeatureSelector('home');
export const selectCurrentWeather = createSelector(
    selectHomeState,
    (state: HomeState) => state.entity
);

export const SelectCurrentWeatherLoading = createSelector(
    selectHomeState,
    (state: HomeState) => state.loading
);

export const selectCurrentWeatherError = createSelector(
    selectHomeState,
    (state: HomeState) => state.error
);