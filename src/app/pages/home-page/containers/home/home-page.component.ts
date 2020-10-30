import { UnitComponent } from './../../components/unit/unit.component';
import { SelectCurrentWeatherLoading } from './../../state/home.selectors';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromHomeActions from '../../state/home.actions'
import * as fromHomeSelectors from '../../state/home.selectors'
import { PortalOutlet, DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchControl: FormControl;
  searchControlWithAutocomplete: FormControl;
  loading$: Observable<boolean>;
  error$: Observable<unknown>;
  cityWeather$: Observable<any>;
  unit$: any;
  isCurrentFavorite$: Observable<any>;
  portalOutlet: any;

  
  constructor(private store: Store, 
     private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
    this.searchControlWithAutocomplete = new FormControl(undefined);
    this.searchControlWithAutocomplete.valueChanges
    // .pipe(takeUntil(this.componentDestroyed$))
    .subscribe((value: any) => {
      if (!!value) {
        this.store.dispatch(fromHomeActions.loadCurrentWeatherById({id: value.geonameid.toString()}));
      }
    });

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.loading$ = this.store.pipe(select(fromHomeSelectors.SelectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
    // todo 
    this.unit$ = of(null);
    this.isCurrentFavorite$ = of(null);
    this.setupPortal();
  }


  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}));
  }


  onToggleBookmark(){
    //
  }
  private setupPortal() {
    const el = document.querySelector('#navbar-portal-outlet');
    this.portalOutlet = new DomPortalOutlet(
      el,
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );
    this.portalOutlet.attach(new ComponentPortal(UnitComponent));
  }


}
