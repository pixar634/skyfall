import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['Kolkata', 'Mumbai', 'Amsterdam'];
  filteredOptions: Observable<string[]>;
  title = 'weather';
  city: string;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.city = 'Amsterdam';
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
  searchNow(e) {
    // console.log(this.myControl.value);
    this.city = this.myControl.value;
    console.log('apppp' + this.city);
  }
}
