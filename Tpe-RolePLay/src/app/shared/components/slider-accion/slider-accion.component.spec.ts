import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAccionComponent } from './slider-accion.component';

describe('SliderAccionComponent', () => {
  let component: SliderAccionComponent;
  let fixture: ComponentFixture<SliderAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
