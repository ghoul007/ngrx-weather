import { WeatherService } from './../../../shared/services/weather.service';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, mergeMap, withLatestFrom } from 'rxjs/operators';

import * as fromBookmarkAction from "./bookmarks.actions"
import * as fromBookmarkSelector from "./bookmarks.selectors"
import { Bookmark } from 'src/app/shared/models/bookmark.model';

@Injectable()
export class BookmarkEffects {



    effectName$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromBookmarkAction.toggleBookmarkById),
            withLatestFrom(this.store.pipe(select(fromBookmarkSelector.selectbookmarkList))),
            mergeMap(([{ id }, bookmarks]: [{ id: number }, Bookmark[]]) => {
                if (bookmarks.some(b => b.id === id)) {
                    return of(bookmarks.filter(b => b.id === id));
                }
                return this.weatherService.getCityWeatherById(id.toString())
                    .pipe(
                        map((cityWeather) => {
                            const bookmark = new Bookmark();
                            bookmark.id = cityWeather.city.id;
                            bookmark.coord = cityWeather.city.coord;
                            bookmark.name = cityWeather.city.name;
                            bookmark.country = cityWeather.city.country;
                            return [...bookmarks, bookmark];
                        }),

                    );

            }),
            map((list: Bookmark[]) => fromBookmarkAction.updateBookmarks({list}))
        );
    });


    constructor(private actions$: Actions, private store: Store, private weatherService: WeatherService) { }

}