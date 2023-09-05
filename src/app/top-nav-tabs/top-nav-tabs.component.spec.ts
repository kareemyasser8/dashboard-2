import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavTabsComponent } from './top-nav-tabs.component';

describe('TopNavTabsComponent', () => {
  let component: TopNavTabsComponent;
  let fixture: ComponentFixture<TopNavTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
