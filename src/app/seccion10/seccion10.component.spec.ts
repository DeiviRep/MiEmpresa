import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion10Component } from './seccion10.component';

describe('Seccion10Component', () => {
  let component: Seccion10Component;
  let fixture: ComponentFixture<Seccion10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
