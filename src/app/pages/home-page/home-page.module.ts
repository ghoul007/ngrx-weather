import { HomePageComponent } from './containers/home/home-page.component';
import { RouterModule } from '@angular/router';
import { HomeEffects } from './state/home.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeReducer } from './state/home.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ]
})
export class HomePageModule { }
