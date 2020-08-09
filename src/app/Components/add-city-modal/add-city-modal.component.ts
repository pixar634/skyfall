import { MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-add-city-modal',
  templateUrl: './add-city-modal.component.html',
  styleUrls: ['./add-city-modal.component.css'],
})
export class AddCityModalComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cityCtrl = new FormControl();
  filteredCities: Observable<string[]>;
  cities: string[] = ['Kolkata'];
  allCities: string[] = [
    'Kolkata',
    'Mumbai',
    'Bengaluru',
    'New Delhi',
    'Pune',
    'Chennai',
    'Hyderabad',
  ];

  @ViewChild('cityInput') cityInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(public dialogRef: MatDialogRef<AddCityModalComponent>) {
    this.filteredCities = this.cityCtrl.valueChanges.pipe(
      startWith(null),
      map((city: string | null) =>
        city ? this._filter(city) : this.allCities.slice()
      )
    );
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.cities.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.cityCtrl.setValue(null);
  }

  remove(city: string): void {
    const index = this.cities.indexOf(city);

    if (index >= 0) {
      this.cities.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.cities.push(event.option.viewValue);
    this.cityInput.nativeElement.value = '';
    this.cityCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCities.filter(
      (fruit) => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
