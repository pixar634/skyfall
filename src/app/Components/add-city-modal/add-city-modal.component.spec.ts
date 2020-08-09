import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityModalComponent } from './add-city-modal.component';

describe('AddCityModalComponent', () => {
  let component: AddCityModalComponent;
  let fixture: ComponentFixture<AddCityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
