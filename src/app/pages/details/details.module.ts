import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../shared/components/components.module';
import { DetailsEffect } from './state/details.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component';
import { DetailsComponent } from './container/details/details.component';
import { reducer } from './state/details.reducers';



@NgModule({
  declarations: [DailyWeatherComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{ path: '', component: DetailsComponent }]
    ),
    StoreModule.forFeature('details', reducer),
    EffectsModule.forFeature([DetailsEffect]),
    ComponentsModule
  ]
})
export class DetailsModule { }
