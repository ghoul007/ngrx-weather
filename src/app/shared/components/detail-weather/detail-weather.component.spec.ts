import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWeatherComponent } from './detail-weather.component';

describe('DetailWeatherComponent', () => {
  let component: DetailWeatherComponent;
  let fixture: ComponentFixture<DetailWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
