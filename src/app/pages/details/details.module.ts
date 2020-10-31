import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../shared/components/components.module';
import { DetailsEffect } from './state/details.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component';
import { DetailsPage } from './container/details/details-page';
import { reducer } from './state/details.reducers';



@NgModule({
  declarations: [DailyWeatherComponent, DetailsPage],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{ path: '', component: DetailsPage }]
    ),
    StoreModule.forFeature('details', reducer),
    EffectsModule.forFeature([DetailsEffect]),
    ComponentsModule
  ]
})
export class DetailsModule { }
