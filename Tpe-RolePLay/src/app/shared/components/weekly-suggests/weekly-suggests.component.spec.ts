import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySuggestsComponent } from './weekly-suggests.component';

describe('WeeklySuggestsComponent', () => {
  let component: WeeklySuggestsComponent;
  let fixture: ComponentFixture<WeeklySuggestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySuggestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklySuggestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
