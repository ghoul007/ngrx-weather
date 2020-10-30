import { WeatherService } from './../../../shared/services/weather.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom, mergeMap } from 'rxjs/operators';
import * as fromDetailsActions from './details.actions';
import * as fromRouterActions from '../../../shared/state/router/router.selector';
import { Params } from '@angular/router';

@Injectable()
export class DetailsEffect {


    weatherDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromDetailsActions.loadWeatherDetails),
            withLatestFrom(this.state.select(fromRouterActions.selectRouterQueryParams)),
            mergeMap(([, queryParams]: [any, Params]) =>
                    combineLatest([
                        this.weatherService.getCityWeatherByCoord(queryParams.lat, queryParams.lon),
                    this.weatherService.getWeatherDetails(queryParams.lat, queryParams.lon),
                    ]).pipe(
                    map(entity => fromDetailsActions.loadWeatherDetailsSuccess({ entity })),
                    catchError(error => of(fromDetailsActions.loadWeatherDetailsFailure())))
            ),
        );
    });

    constructor(private actions$: Actions, private state: Store, private weatherService: WeatherService) { }
}