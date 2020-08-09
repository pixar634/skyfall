import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  // storedCities: any;

  constructor() {}
  cityArray: any;
  pushCitydata(city) {
    console.log('consoooole', city);
    for (var i of city) {
      this.cityArray.push(i);
    }
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
