import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOptionTabsComponent } from './display-option-tabs.component';

describe('DisplayOptionTabsComponent', () => {
  let component: DisplayOptionTabsComponent;
  let fixture: ComponentFixture<DisplayOptionTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOptionTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayOptionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
