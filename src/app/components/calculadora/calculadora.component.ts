import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operandoA = 0;
  operandoB = 0;
  resultado = 0;

  operandoFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9 ]*')
  ]);
  
  sumarOperandos(){
    this.resultado = this.operandoA + this.operandoB
    console.log(this.resultado)
    return this.resultado
  }
}
