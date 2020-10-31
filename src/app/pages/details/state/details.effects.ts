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
            withLatestFrom(this.store.select(fromRouterActions.selectRouterQueryParams)),
            mergeMap(([, queryParams]) =>
                combineLatest([
                    this.weatherService.getCityWeatherByCoord(queryParams.lat, queryParams.lon),
                    this.weatherService.getWeatherDetails(queryParams.lat, queryParams.lon),
                ])),
            catchError((err, caught$) => {
                this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailure());
                return caught$;
            }),
            map(([current, daily]) => {
                const entity = daily;
                entity.city = { ...current.city, timeZone: daily.city.timeZone }
                return fromDetailsActions.loadWeatherDetailsSuccess({ entity });
            })
        )
    });

    constructor(private actions$: Actions, private store: Store, private weatherService: WeatherService) { }
}