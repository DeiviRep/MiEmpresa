import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion6Component } from './seccion6.component';

describe('Seccion6Component', () => {
  let component: Seccion6Component;
  let fixture: ComponentFixture<Seccion6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
