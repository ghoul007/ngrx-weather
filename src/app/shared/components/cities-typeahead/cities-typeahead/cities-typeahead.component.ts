import { Component, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CitiesService } from 'src/app/shared/services/cities.service';

@Component({
  selector: 'app-cities-typeahead',
  templateUrl: './cities-typeahead.component.html',
  styleUrls: ['./cities-typeahead.component.scss']
})
export class CitiesTypeaheadComponent implements OnInit, ControlValueAccessor {
  disabled: boolean;
  loading: boolean;
  private onChange: (value: any) => void;
  private onTouched: () => void;
  dataSource$: any;
  search: string;

  constructor(private citiesService: CitiesService,
    @Optional() @Self() public control: NgControl) {
    control.valueAccessor = this;
  }


  writeValue(obj: any): void {
  }
  onSelected(match: any) {
    this.onTouched();
    this.onChange(match.item);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {
    this.dataSource$ = new Observable(
      (subscriber: Subscriber<string>) => subscriber.next(this.search)
    )
      .pipe(
        switchMap((query: string) => this.citiesService.getCities(query))
      );
  }


}
