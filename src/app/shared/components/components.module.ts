import { DetailedWeatherComponent } from './detail-weather/detail-weather.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead/cities-typeahead.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [CitiesTypeaheadComponent, LoaderComponent, DetailedWeatherComponent],
  exports: [CitiesTypeaheadComponent, LoaderComponent, DetailedWeatherComponent],
  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ]
})
export class ComponentsModule { }
