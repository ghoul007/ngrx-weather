import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Units } from 'src/app/shared/models/unit.enum';
import { CityDailyWeather } from 'src/app/shared/models/weather.model';

import * as fromDetailsSelectors from  '../../state/details.selectors';
import * as fromDetailsActions from  '../../state/details.actions';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details$: Observable<CityDailyWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  unit$: Observable<Units>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());

    this.details$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsentity));
    this.loading$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsloading));
    this.error$ = this.store.pipe(select(fromDetailsSelectors.selectDetailserror));

    // this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
  }
}
