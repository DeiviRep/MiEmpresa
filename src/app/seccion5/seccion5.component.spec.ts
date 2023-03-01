import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion5Component } from './seccion5.component';

describe('Seccion5Component', () => {
  let component: Seccion5Component;
  let fixture: ComponentFixture<Seccion5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
