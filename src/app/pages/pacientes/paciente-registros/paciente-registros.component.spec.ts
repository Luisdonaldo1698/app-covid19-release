import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteRegistrosComponent } from './paciente-registros.component';

describe('PacienteRegistrosComponent', () => {
  let component: PacienteRegistrosComponent;
  let fixture: ComponentFixture<PacienteRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
