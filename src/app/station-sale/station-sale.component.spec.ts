import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationSaleComponent } from './station-sale.component';

describe('StationSaleComponent', () => {
  let component: StationSaleComponent;
  let fixture: ComponentFixture<StationSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
