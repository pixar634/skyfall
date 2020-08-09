import { MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CitiesService } from 'src/app/services/cities.service';

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
  @Output() selectedCities = new EventEmitter<string[]>();
  constructor(
    public dialogRef: MatDialogRef<AddCityModalComponent>,
    public cityservice: CitiesService
  ) {
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

    // Add our city
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
      (city) => city.toLowerCase().indexOf(filterValue) === 0
    );
  }
  sendCities() {
    console.log('-----------', this.cities);
    this.selectedCities.emit(this.cities);
    this.dialogRef.close();
  }
}
