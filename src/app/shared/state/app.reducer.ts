import { RouterState } from './router/router.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {

    router: RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
}