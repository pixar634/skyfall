import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  // storedCities: any;

  constructor() {}
  cityArray: string[] = ['mumbai'];
  pushCitydata(city) {
    // consoleconsole.log('consoooole', this.cityArray);
    this.cityArray.push(...city);
    // return this.cityArray;
  }
  arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
  removeCity(cityname) {
    this.cityArray = this.arrayRemove(this.cityArray, cityname);
    return this.cityArray;
  }
  getCity() {
    return this.cityArray;
  }
}
