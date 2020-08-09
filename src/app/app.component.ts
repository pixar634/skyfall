import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myControl = new FormControl();

  filteredOptions: Observable<string[]>;
  title = 'weather';
  city: string[] = ['Kolkata'];
  constructor(public citiesService: CitiesService) {}
  ngOnInit() {
    this.citiesService.pushCitydata(this.city);
    this.city = this.citiesService.getCity();
    console.log('**********', this.city);
  }
  test(choice) {
    console.log(choice);
  }
}
