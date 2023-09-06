import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOptionsPopUpComponent } from './list-options-pop-up.component';

describe('ListOptionsPopUpComponent', () => {
  let component: ListOptionsPopUpComponent;
  let fixture: ComponentFixture<ListOptionsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOptionsPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOptionsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
