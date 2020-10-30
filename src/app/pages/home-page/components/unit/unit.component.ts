import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {


  unit$: Observable<any>;
  unit: any;

   

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    // this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    // this.unit$
    //   .subscribe(unit => this.unit = unit);
  }

  updateUnit(unit: any) {
    // this.store.dispatch(fromConfigActions.updateUnit({ unit }));
  }
}
