import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { injectSpy } from 'angular-unit-test-helper';
import { of } from 'rxjs';

import { MaterialModule } from '../material.module';
import { WeatherService } from '../weather/weather.service';
import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let weatherServiceMock: jasmine.SpyObj<WeatherService>;

  beforeEach(async(() => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCurrentWeather',
    ]);
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceSpy,
        },
      ],
      imports: [MaterialModule],
    }).compileComponents();
    weatherServiceMock = injectSpy(WeatherService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of());
    // Act
    fixture.detectChanges();
    // Assert
    expect(component).toBeTruthy();
  });
});
