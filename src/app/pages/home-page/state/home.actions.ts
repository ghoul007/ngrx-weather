import { createAction, props } from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { Weather } from 'src/app/shared/models/weather.model';

export const clearHomeState = createAction(
    '[HomePage] clearHomeState'
);

export const loadCurrentWeather = createAction(
    '[HomePage] loadCurrentWeather',
    props<{ query: string }>(),
);

export const loadCurrentWeatherById = createAction(
    '[HomePage] loadCurrentWeatherById',
    props<{ id: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[HomePage] loadCurrentWeatherSuccess',
    props<{entity: Weather}>()
);

export const loadCurrentWeatherFailed = createAction(
    '[HomePage] loadCurrentWeatherFailed'
);

export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{ entity: Bookmark }>(),
  );