import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavStateComponent } from './top-nav-state.component';

describe('TopNavStateComponent', () => {
  let component: TopNavStateComponent;
  let fixture: ComponentFixture<TopNavStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
