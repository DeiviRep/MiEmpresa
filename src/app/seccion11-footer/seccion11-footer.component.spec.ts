import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion11FooterComponent } from './seccion11-footer.component';

describe('Seccion11FooterComponent', () => {
  let component: Seccion11FooterComponent;
  let fixture: ComponentFixture<Seccion11FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion11FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion11FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
