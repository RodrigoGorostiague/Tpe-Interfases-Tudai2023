import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarrerasComponent } from './slider-carreras.component';

describe('SliderCarrerasComponent', () => {
  let component: SliderCarrerasComponent;
  let fixture: ComponentFixture<SliderCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCarrerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
