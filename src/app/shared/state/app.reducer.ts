import { ConfigState, configReducer } from './config/config.reducers';
import { RouterState } from './router/router.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    config: ConfigState;
    router: RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<AppState> = {
    config: configReducer,
    router: routerReducer
}