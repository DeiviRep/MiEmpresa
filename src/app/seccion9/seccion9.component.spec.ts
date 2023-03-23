import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion9Component } from './seccion9.component';

describe('Seccion9Component', () => {
  let component: Seccion9Component;
  let fixture: ComponentFixture<Seccion9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
