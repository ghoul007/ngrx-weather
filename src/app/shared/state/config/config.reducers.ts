import { createReducer, on } from '@ngrx/store';
import { Units } from '../../models/unit.enum';

import * as fromConfigActions from './config.actions';

export interface ConfigState {
  unit: any;
}

export const configInitialState: ConfigState = {
  unit: Units.Metric,
}

export const configReducer = createReducer(
  configInitialState,
  on(fromConfigActions.updateUnit, (state, { unit }) => ({
    ...state,
    unit,
  })),
);