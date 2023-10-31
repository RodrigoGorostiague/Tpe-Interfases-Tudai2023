import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMenuComponent } from './perfil-menu.component';

describe('PerfilMenuComponent', () => {
  let component: PerfilMenuComponent;
  let fixture: ComponentFixture<PerfilMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
