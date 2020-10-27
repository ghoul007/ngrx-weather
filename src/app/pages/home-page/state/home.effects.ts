import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import * as fromHomeActions from './home.actions';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Weather } from 'src/app/shared/models/weather.model';

@Injectable()
export class HomeEffects {


    effectName$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromHomeActions.loadCurrentWeather),
            tap(() => console.log("yes")),
            mergeMap(() =>
                of({
                    city: "",
                    weather: ""
                }).pipe(
                    map((entity: Weather) => fromHomeActions.loadCurrentWeatherSuccess({ entity })),
                    catchError(error => of(fromHomeActions.loadCurrentWeatherFailed())))
            ),
        );
    });

    constructor(private actions$: Actions) { }
}