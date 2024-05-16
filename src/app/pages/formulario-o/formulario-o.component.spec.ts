import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOComponent } from './formulario-o.component';

describe('FormularioOComponent', () => {
  let component: FormularioOComponent;
  let fixture: ComponentFixture<FormularioOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
