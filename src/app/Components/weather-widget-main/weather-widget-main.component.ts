import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css'],
})
export class WeatherWidgetMainComponent implements OnInit, OnChanges {
  WeatherData: any;
  @Input() city: string;
  constructor(public dialog: MatDialog, public cService: CitiesService) {}

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData(this.city);
    console.log('sadasdasdasd' + this.city);
  }
  ngOnChanges() {
    this.setCity(this.city);
  }
  setCity(city) {
    this.getWeatherData(city);
  }
  getWeatherData(cityString) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        cityString +
        '&appid=7392400f17141bdfa19378928900ebdb'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });
  }
  setWeatherData(data) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.WeatherData.temp_feels_like = (
      this.WeatherData.main.feels_like - 273.15
    ).toFixed(0);
  }
  openDetailsModal() {
    console.log('modal is now open');
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      width: '450px',
      height: '200px',
    });
    setTimeout(() => {
      dialogRef.close();
    }, 10000);
  }
}
