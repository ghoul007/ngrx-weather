import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';
// import { Units } from '../../models/units.enum';
// import { unitToSymbol } from '../../utils/units.utils';

@Component({
  selector: 'jv-detailed-weather',
  templateUrl: './detail-weather.component.html',
  styleUrls: ['./detail-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {

  @Input() weather: Weather;
  @Input() unit: any;

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.weather && this.weather.icon }@2x.png`;
  }

  get unitSymbol(): string {
    return "5"; //unitToSymbol(this.unit);
  }
}