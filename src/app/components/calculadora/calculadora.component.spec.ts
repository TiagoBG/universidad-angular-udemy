import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();

    component = new CalculadoraComponent();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*   Reformular las pruebas teniendo en cuenta el FormGroup
 */  
  xit('El método sumaOperandos deberá devolver el resultado de una suma', ()=>{
  component.operandoA= 2;
  component.operandoAFormControl.setValue(5);    
    expect(component.sumarOperandos()).toBeTruthy;
    expect(component.sumarOperandos()).toEqual(jasmine.any(Number));
    expect(component.sumarOperandos()).toBe(7);
  });

  it('los input son de tipo número', ()=>{
    let operandoA : number = component.operandoA;
    let operandoB : number = component.operandoB;

    expect(operandoA).toBeDefined;
    expect(operandoB).toBeDefined;
    expect(operandoA).toBeTruthy;
    expect(operandoB).toBeTruthy;
    expect(operandoA).toEqual(jasmine.any(Number));
    expect(operandoB).toEqual(jasmine.any(Number));
  });
});
