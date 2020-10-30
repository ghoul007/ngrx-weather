import { BookmarksModule } from './pages/bookmarks-page/bookmarks.module';
import { reducers } from './shared/state/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
    HomePageModule,
    BookmarksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
