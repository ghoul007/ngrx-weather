import { Store } from '@ngrx/store';
import { WeatherService } from './../../../shared/services/weather.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import * as fromHomeActions from './home.actions';
import { map, mergeMap, catchError, tap, delay } from 'rxjs/operators';
import { Weather } from 'src/app/shared/models/weather.model';

@Injectable()
export class HomeEffects {


    loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromHomeActions.loadCurrentWeather),
      mergeMap(({ query }) => this.weatherService.getCityWeatherByQuery(query)),
      map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({ entity })),
    ),
  );

    constructor(private actions$: Actions, private weatherService: WeatherService, private store: Store) { }
}