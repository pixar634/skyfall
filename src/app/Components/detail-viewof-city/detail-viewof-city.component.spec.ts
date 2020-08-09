import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewofCityComponent } from './detail-viewof-city.component';

describe('DetailViewofCityComponent', () => {
  let component: DetailViewofCityComponent;
  let fixture: ComponentFixture<DetailViewofCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewofCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewofCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
