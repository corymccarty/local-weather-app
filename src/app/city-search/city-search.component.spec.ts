import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { injectSpy } from 'angular-unit-test-helper';

import { WeatherService } from '../weather/weather.service';
import { CitySearchComponent } from './city-search.component';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;
  let weatherServiceMock: jasmine.SpyObj<WeatherService>;

  beforeEach(async(() => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'updateCurrentWeather',
    ]);
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceSpy,
        },
      ],
    }).compileComponents();
    weatherServiceMock = injectSpy(WeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
