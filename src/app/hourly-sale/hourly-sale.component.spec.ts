import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySaleComponent } from './hourly-sale.component';

describe('HourlySaleComponent', () => {
  let component: HourlySaleComponent;
  let fixture: ComponentFixture<HourlySaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlySaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
