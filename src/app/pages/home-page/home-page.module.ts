import { ComponentsModule } from '../../shared/components/components.module';
import { HomePage } from './containers/home/home-page';
import { RouterModule } from '@angular/router';
import { HomeEffects } from './state/home.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeReducer } from './state/home.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { UnitComponent } from './components/unit/unit.component';



@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent,
    UnitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ]
})
export class HomePageModule { }
