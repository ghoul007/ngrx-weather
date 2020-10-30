import { createReducer, on } from '@ngrx/store';

import * as fromConfigActions from './config.actions';

export interface ConfigState {
  unit: any;
}

export const configInitialState: ConfigState = {
  unit: 2,
}

export const configReducer = createReducer(
  configInitialState,
  on(fromConfigActions.updateUnit, (state, { unit }) => ({
    ...state,
    unit,
  })),
);