import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDeportesComponent } from './slider-deportes.component';

describe('SliderDeportesComponent', () => {
  let component: SliderDeportesComponent;
  let fixture: ComponentFixture<SliderDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderDeportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
