import { UnitComponent } from '../../components/unit/unit.component';
import { SelectCurrentWeatherLoading } from '../../state/home.selectors';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as fromHomeActions from '../../state/home.actions'
import * as fromHomeSelectors from '../../state/home.selectors'
import * as fromBookmarksSelectors from '../../../bookmarks-page/state/bookmarks.selectors'
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors'
import { PortalOutlet, DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage implements OnInit {
  searchControl: FormControl;
  searchControlWithAutocomplete: FormControl;
  loading$: Observable<boolean>;
  error$: Observable<unknown>;
  cityWeather$: Observable<any>;
  unit$: any;
  isCurrentFavorite$: Observable<boolean>;
  portalOutlet: any;

  private componentDestroyed$ = new Subject();
  bookmarksList$: Observable<unknown>;
  cityWeather: any;
  
  constructor(private store: Store, 
     private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
    this.searchControlWithAutocomplete = new FormControl(undefined);
    this.searchControlWithAutocomplete.valueChanges
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe((value: any) => {
      if (!!value) {
        this.store.dispatch(fromHomeActions.loadCurrentWeatherById({id: value.geonameid.toString()}));
      }
    });

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    this.cityWeather$
    .pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.cityWeather = value);
    this.loading$ = this.store.pipe(select(fromHomeSelectors.SelectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

    this.bookmarksList$ = this.store.pipe(select(fromBookmarksSelectors.selectbookmarkList));
    this.isCurrentFavorite$ = combineLatest([this.cityWeather$, this.bookmarksList$])
    .pipe(
      map(([current, bookmarksList]) => {
        if (!!current) {
          return (bookmarksList as any[]).some(bookmark => bookmark.id === current.city.id);
        }
        return false;
      }),
    );

    // todo 
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    this.setupPortal();
  }


  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}));
  }


  onToggleBookmark(){
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
    this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
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

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromHomeActions.clearHomeState());
    this.portalOutlet.detach();
  }


}
