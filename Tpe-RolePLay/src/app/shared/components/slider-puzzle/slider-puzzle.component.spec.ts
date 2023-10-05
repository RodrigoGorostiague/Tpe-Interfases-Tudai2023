import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPuzzleComponent } from './slider-puzzle.component';

describe('SliderPuzzleComponent', () => {
  let component: SliderPuzzleComponent;
  let fixture: ComponentFixture<SliderPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPuzzleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
