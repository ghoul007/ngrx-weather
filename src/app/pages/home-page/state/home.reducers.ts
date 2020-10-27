import { createReducer, on } from '@ngrx/store';
import * as fromHomeActions from './home.actions';
import * as AppState from '../../../state';

export interface State extends AppState.State {
    home: HomeState
}


export interface HomeState {
    entity: any;
    loading: boolean;
    error: boolean;
};

const homeInitialState: HomeState = {
    entity: undefined,
    loading: false,
    error: false
};

export const homeReducer = createReducer(
    homeInitialState,
    on(fromHomeActions.clearHomeState, () => homeInitialState),
    on(
      fromHomeActions.loadCurrentWeather,
      fromHomeActions.loadCurrentWeatherById,
      state => ({
        ...state,
        loading: true,
        error: false,
      }),
    ),
    on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
      ...state,
      entity,
      loading: false,
    })),
    on(fromHomeActions.loadCurrentWeatherFailed, state => ({
      ...state,
      loading: false,
      error: true,
    })),
  );