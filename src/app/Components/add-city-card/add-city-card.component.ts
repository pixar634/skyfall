import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCityModalComponent } from '../add-city-modal/add-city-modal.component';

@Component({
  selector: 'app-add-city-card',
  templateUrl: './add-city-card.component.html',
  styleUrls: ['./add-city-card.component.css'],
})
export class AddCityCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openAddCityModal() {
    console.log('modal is now open');
    const dialogRef = this.dialog.open(AddCityModalComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
