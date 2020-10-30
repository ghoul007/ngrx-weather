import { createAction, props } from '@ngrx/store';

export const loadWeatherDetails = createAction(
    '[Details] loadWeatherDetails'
);

export const loadWeatherDetailsSuccess = createAction(
    '[Details] load Weather Details Success',
    props<{ entity: any }>()
);


export const loadWeatherDetailsFailure = createAction(
    '[Details] load Weather Details Failure'
);