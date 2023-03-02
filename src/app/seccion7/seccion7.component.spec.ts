import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion7Component } from './seccion7.component';

describe('Seccion7Component', () => {
  let component: Seccion7Component;
  let fixture: ComponentFixture<Seccion7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
