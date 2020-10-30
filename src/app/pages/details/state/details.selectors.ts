import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailsState } from './details.reducers';


export const selectDetailsState = createFeatureSelector('details');
export const selectDetailsentity = createSelector(
    selectDetailsState,
    (state: DetailsState) => state.entity
);

export const selectDetailsloading = createSelector(
    selectDetailsState,
    (state: DetailsState) => state.loading
);

export const selectDetailserror = createSelector(
    selectDetailsState,
    (state: DetailsState) => state.error
);