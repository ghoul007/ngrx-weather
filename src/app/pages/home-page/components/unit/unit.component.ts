import { AppState } from './../../../../shared/state/app.reducer';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromConfigSelectors from  '../../../../shared/state/config/config.selectors'
import * as fromConfigActions from  '../../../../shared/state/config/config.actions'
import { Units } from 'src/app/shared/models/unit.enum';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {


  unit$: Observable<any>;
  unit: any;

  unitsEnum = Units;
   

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    this.unit$
      .subscribe(unit => this.unit = unit);
  }

  updateUnit(unit: any) {
    this.store.dispatch(fromConfigActions.updateUnit({ unit }));
  }
}
