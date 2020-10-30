import { createReducer, State, Action, on } from '@ngrx/store';
import * as fromDetailsActions from './details.actions';

export interface DetailsState {
    entity: any;
    loading: boolean;
    error: boolean;
}

const initialDetailsState = {
    entity: [],
    loading: false,
    error: false
}
const detailsReducer = createReducer(
    initialDetailsState,
    on(fromDetailsActions.loadWeatherDetails, state => ({ ...state, loading: true, error: false })),
    on(fromDetailsActions.loadWeatherDetailsSuccess, (state, { entity }) => ({ ...state, entity, loading: false })),
    on(fromDetailsActions.loadWeatherDetailsFailure, state => ({ ...state, loading: false, error: true })),
);

export function reducer(state: DetailsState | undefined, action: Action) {
    return detailsReducer(state, action);
}