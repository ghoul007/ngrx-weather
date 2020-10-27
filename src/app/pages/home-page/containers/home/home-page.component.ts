import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromHomeActions from '../../state/home.actions'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchControl: FormControl;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
  }


  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather());
  }

}
