import { DetailsState } from '../../state/details.reducers';
import { AppState } from '../../../../shared/state/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Units } from 'src/app/shared/models/unit.enum';
import { CityDailyWeather } from 'src/app/shared/models/weather.model';

import * as fromDetailsSelectors from  '../../state/details.selectors';
import * as fromDetailsActions from  '../../state/details.actions';
import * as fromConfigSelectors from  '../../../../shared/state/config/config.selectors';
@Component({
  selector: 'app-details',
  templateUrl: './details-page.html',
  styleUrls: ['./details-page.scss']
})
export class DetailsPage implements OnInit {

  details$: Observable<CityDailyWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  unit$: Observable<Units>;

  constructor(private store: Store<DetailsState>) {
  }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());

    this.details$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsentity));
    this.loading$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsloading));
    this.error$ = this.store.pipe(select(fromDetailsSelectors.selectDetailserror));

    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
  }
}
