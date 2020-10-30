import { createAction, props } from '@ngrx/store';


export const updateUnit = createAction(
 '[Config] Update Unit',
 props<{ unit: any }>(),
);